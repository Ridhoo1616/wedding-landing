// Semua isi halaman ada di berkas ini. Ganti teks, tanggal, dan foto di sini;
// komponen di src/components hanya membaca data ini.
import type { ImageMetadata } from 'astro';

import sampul from '../assets/foto/sampul.webp';
import mempelaiWanita from '../assets/foto/mempelai-wanita.webp';
import punggung from '../assets/foto/punggung.webp';
import gaunJendela from '../assets/foto/gaun-jendela.webp';
import detailKalung from '../assets/foto/detail-kalung.webp';
import detailSepatu from '../assets/foto/detail-sepatu.webp';
import detailCincin from '../assets/foto/detail-cincin.webp';
import detailGaun from '../assets/foto/detail-gaun.webp';
import detailBahu from '../assets/foto/detail-bahu.webp';
import detailKancing from '../assets/foto/detail-kancing.webp';
import buketPutih from '../assets/foto/buket-putih.webp';
import buketLili from '../assets/foto/buket-lili.webp';
import buketTaman from '../assets/foto/buket-taman.webp';
import buketMawar from '../assets/foto/buket-mawar.webp';
import anggrek from '../assets/foto/anggrek.webp';

export interface Foto {
  src: ImageMetadata;
  alt: string;
  /** Titik fokus saat foto dipotong, format CSS object-position. */
  fokus?: string;
}

/**
 * Nama slot sebuah foto, diambil dari nama berkasnya (mis. "sampul").
 * Dipakai fitur "Atur foto" untuk mengganti semua tempat foto itu tampil.
 */
export const slot = (src: ImageMetadata) => src.src.split('/').pop()!.split(/[.?]/)[0];

/** Keterangan tiap slot di panel "Atur foto", berurutan seperti di halaman. */
export const labelSlot: Record<string, string> = {
  sampul: 'Sampul & pembuka',
  'mempelai-wanita': 'Tentang dia — foto 1',
  punggung: 'Tentang dia — foto 2',
  'detail-kalung': 'Detail 1',
  'detail-sepatu': 'Detail 2',
  'detail-cincin': 'Detail 3',
  'detail-kancing': 'Detail 4',
  'buket-lili': 'Detail 5',
  'detail-bahu': 'Detail 6',
  'buket-putih': 'Galeri 1',
  'detail-gaun': 'Galeri 2',
  'buket-mawar': 'Galeri 3',
  anggrek: 'Galeri 4',
  'buket-taman': 'Galeri 5',
  'gaun-jendela': 'Penutup',
};

export const pasangan = {
  pria: { panggilan: 'Ridho' },
  wanita: { panggilan: 'Karina' },
};

/** Tanggal mulai bersama, untuk penghitung "sudah bersama". Tulis lengkap dengan zona waktu. */
export const bersamaSejak = '2024-02-14T00:00:00+07:00';

export const kutipan = {
  teks: 'Aku tidak mencari seseorang yang sempurna. Aku menemukan seseorang yang membuat hari-hari biasa terasa seperti hadiah.',
  sumber: 'Ridho',
};

export const tentang = {
  wanita: 'Suka kopi susu, lagu-lagu pelan, dan foto di bawah cahaya sore. Orang paling sabar yang pernah aku kenal.',
  pria: 'Yang selalu jadi fotografernya, dan tidak pernah bosan.',
};

export const foto = {
  sampul: { src: sampul, alt: 'Foto sampul', fokus: '50% 40%' },
  tentang: { src: mempelaiWanita, alt: 'Foto Karina', fokus: '52% 30%' },
  tentangKedua: { src: punggung, alt: 'Foto Karina yang lain', fokus: '50% 30%' },
  penutup: { src: gaunJendela, alt: 'Foto penutup', fokus: '50% 45%' },
} satisfies Record<string, Foto>;

/** Potongan detail yang bergeser mendatar saat halaman digulir. */
export const sorotan: (Foto & { judul: string })[] = [
  { judul: 'Senyum', src: detailKalung, alt: 'Detail 1', fokus: '35% 45%' },
  { judul: 'Gaya', src: detailSepatu, alt: 'Detail 2', fokus: '50% 50%' },
  { judul: 'Janji', src: detailCincin, alt: 'Detail 3', fokus: '60% 55%' },
  { judul: 'Tawa', src: detailKancing, alt: 'Detail 4', fokus: '50% 40%' },
  { judul: 'Tenang', src: buketLili, alt: 'Detail 5', fokus: '50% 50%' },
  { judul: 'Anggun', src: detailBahu, alt: 'Detail 6', fokus: '30% 40%' },
];

/** Galeri; `besar: true` membuat foto mengambil dua baris di layar lebar. */
export const galeri: (Foto & { besar?: boolean })[] = [
  { src: sampul, alt: 'Foto sampul', besar: true },
  { src: buketPutih, alt: 'Galeri 1' },
  { src: punggung, alt: 'Tentang dia — foto 2', besar: true },
  { src: detailGaun, alt: 'Galeri 2' },
  { src: mempelaiWanita, alt: 'Tentang dia — foto 1' },
  { src: buketMawar, alt: 'Galeri 3', besar: true },
  { src: anggrek, alt: 'Galeri 4' },
  { src: detailCincin, alt: 'Detail 3' },
  { src: buketTaman, alt: 'Galeri 5', besar: true },
  { src: detailKalung, alt: 'Detail 1' },
  { src: gaunJendela, alt: 'Penutup' },
  { src: detailSepatu, alt: 'Detail 2' },
];

/** Nomor WhatsApp penerima pesan dari pengunjung, format 62xxxxxxxxxx. */
export const whatsapp = '6281234567890';
