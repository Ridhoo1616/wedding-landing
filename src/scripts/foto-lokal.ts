// Foto pengganti yang dipilih lewat panel "Atur foto". Disimpan di IndexedDB
// peramban ini saja: tidak diunggah, dan pengunjung lain tetap melihat foto bawaan.

const DB = 'halaman-foto';
const TOKO = 'foto';

function buka(): Promise<IDBDatabase> {
  return new Promise((ok, gagal) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(TOKO);
    r.onsuccess = () => ok(r.result);
    r.onerror = () => gagal(r.error);
  });
}

async function transaksi<T>(mode: IDBTransactionMode, kerja: (t: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await buka();
  return new Promise((ok, gagal) => {
    const r = kerja(db.transaction(TOKO, mode).objectStore(TOKO));
    r.onsuccess = () => ok(r.result);
    r.onerror = () => gagal(r.error);
  });
}

export async function semua(): Promise<Map<string, Blob>> {
  const db = await buka();
  return new Promise((ok, gagal) => {
    const hasil = new Map<string, Blob>();
    const r = db.transaction(TOKO).objectStore(TOKO).openCursor();
    r.onsuccess = () => {
      const c = r.result;
      if (!c) return ok(hasil);
      hasil.set(String(c.key), c.value as Blob);
      c.continue();
    };
    r.onerror = () => gagal(r.error);
  });
}

export const simpan = (slot: string, b: Blob) => transaksi('readwrite', (t) => t.put(b, slot));
export const hapus = (slot: string) => transaksi('readwrite', (t) => t.delete(slot));
export const kosongkan = () => transaksi('readwrite', (t) => t.clear());

/** Perkecil foto ke sisi terpanjang 1600 px supaya penyimpanan tetap ringan. */
export async function perkecil(berkas: File): Promise<Blob> {
  const gambar = await createImageBitmap(berkas);
  const skala = Math.min(1, 1600 / Math.max(gambar.width, gambar.height));
  const kanvas = document.createElement('canvas');
  kanvas.width = Math.round(gambar.width * skala);
  kanvas.height = Math.round(gambar.height * skala);
  kanvas.getContext('2d')!.drawImage(gambar, 0, 0, kanvas.width, kanvas.height);
  gambar.close();
  return new Promise((ok, gagal) =>
    kanvas.toBlob((b) => (b ? ok(b) : gagal(new Error('Foto tidak bisa dibaca'))), 'image/jpeg', 0.88),
  );
}

const alamat = new Map<string, string>();
const asli = new WeakMap<Element, { src: string; srcset: string | null; besar?: string }>();

/** Pasang foto pengganti (atau kembalikan foto bawaan bila `b` kosong) di semua tempat slot itu tampil. */
export function terapkan(slot: string, b: Blob | null) {
  const lama = alamat.get(slot);
  if (lama) URL.revokeObjectURL(lama);
  const url = b ? URL.createObjectURL(b) : null;
  if (url) alamat.set(slot, url);
  else alamat.delete(slot);

  document.querySelectorAll<HTMLElement>(`[data-slot="${slot}"]`).forEach((el) => {
    if (!asli.has(el)) {
      asli.set(el, {
        src: el instanceof HTMLImageElement ? el.src : '',
        srcset: el.getAttribute('srcset'),
        besar: el.dataset.besar,
      });
    }
    const awal = asli.get(el)!;
    if (el instanceof HTMLImageElement) {
      if (url) {
        el.removeAttribute('srcset');
        el.src = url;
      } else {
        if (awal.srcset) el.setAttribute('srcset', awal.srcset);
        el.src = awal.src;
      }
    } else if (awal.besar !== undefined) {
      // Tombol galeri menyimpan alamat versi besar untuk penampil layar penuh.
      el.dataset.besar = url ?? awal.besar;
    }
  });
}

export async function terapkanSemua() {
  try {
    for (const [slot, b] of await semua()) terapkan(slot, b);
  } catch {
    // IndexedDB tidak tersedia (mis. mode privat tertentu); foto bawaan tetap dipakai.
  }
}
