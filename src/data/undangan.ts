// Semua isi undangan ada di berkas ini. Ganti teks, tanggal, dan foto di sini;
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
import dekorasiMeja from '../assets/foto/dekorasi-meja.webp';

export interface Foto {
  src: ImageMetadata;
  alt: string;
  /** Titik fokus saat foto dipotong, format CSS object-position. */
  fokus?: string;
}

export const mempelai = {
  wanita: {
    panggilan: 'Aurelia',
    lengkap: 'Aurelia Kirana Putri',
    ortu: 'Putri dari Bapak Hendra Wijaya & Ibu Sekar Ayu',
    instagram: 'aureliakirana',
  },
  pria: {
    panggilan: 'Rafael',
    lengkap: 'Rafael Adiputra',
    ortu: 'Putra dari Bapak Surya Adiputra & Ibu Laras Dewi',
    instagram: 'rafaeladiputra',
  },
};

/** Waktu utama untuk hitung mundur. Tulis lengkap dengan zona waktu. */
export const tanggalUtama = '2026-12-12T08:00:00+07:00';

export const acara = [
  {
    nama: 'Akad Nikah',
    mulai: '2026-12-12T08:00:00+07:00',
    selesai: '2026-12-12T10:00:00+07:00',
    tempat: 'Masjid Agung Al-Azhar',
    alamat: 'Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan',
    peta: 'https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta',
  },
  {
    nama: 'Resepsi',
    mulai: '2026-12-12T11:00:00+07:00',
    selesai: '2026-12-12T14:00:00+07:00',
    tempat: 'The Glasshouse Ballroom',
    alamat: 'Jl. Kemang Raya No. 8, Jakarta Selatan',
    peta: 'https://maps.google.com/?q=Kemang+Raya+Jakarta',
  },
];

export const kutipan = {
  teks: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
  sumber: 'QS. Ar-Rum: 21',
};

export const foto = {
  sampul: { src: sampul, alt: 'Pengantin wanita berdiri di depan jendela yang terang', fokus: '50% 40%' },
  mempelaiWanita: { src: mempelaiWanita, alt: 'Pengantin wanita menggandeng tangan sambil menatap lembah berkabut', fokus: '52% 30%' },
  mempelaiWanitaKedua: { src: punggung, alt: 'Rambut panjang berhias jepit mutiara dan gaun berenda', fokus: '50% 30%' },
  penutup: { src: gaunJendela, alt: 'Gaun pengantin tergantung di depan jendela', fokus: '50% 45%' },
  acara: { src: dekorasiMeja, alt: 'Meja resepsi berhias mawar merah muda dan anggrek putih', fokus: '65% 60%' },
} satisfies Record<string, Foto>;

/** Potongan detail yang bergeser mendatar saat halaman digulir. */
export const sorotan: (Foto & { judul: string })[] = [
  { judul: 'Mutiara', src: detailKalung, alt: 'Kalung mutiara tiga lapis di atas gaun berenda', fokus: '35% 45%' },
  { judul: 'Renda', src: detailSepatu, alt: 'Pengantin memegang sepatu putih, lengan gaun berenda', fokus: '50% 50%' },
  { judul: 'Janji', src: detailCincin, alt: 'Tangan bercincin memegang buket mawar', fokus: '60% 55%' },
  { judul: 'Kancing', src: detailKancing, alt: 'Deretan kancing di punggung gaun', fokus: '50% 40%' },
  { judul: 'Lili', src: buketLili, alt: 'Buket bunga lili calla putih', fokus: '50% 50%' },
  { judul: 'Anggun', src: detailBahu, alt: 'Bahu dan kalung berhias bunga kristal', fokus: '30% 40%' },
];

/** Galeri; `besar: true` membuat foto mengambil dua baris di layar lebar. */
export const galeri: (Foto & { besar?: boolean })[] = [
  { src: sampul, alt: 'Pengantin wanita di depan jendela', besar: true },
  { src: buketPutih, alt: 'Buket bunga putih di samping gaun' },
  { src: punggung, alt: 'Rambut berhias jepit mutiara', besar: true },
  { src: detailGaun, alt: 'Tangan merapikan gaun berenda' },
  { src: mempelaiWanita, alt: 'Pengantin wanita menatap lembah' },
  { src: buketMawar, alt: 'Buket mawar ungu dan sarung tangan putih', besar: true },
  { src: anggrek, alt: 'Anggrek putih di atas renda' },
  { src: detailCincin, alt: 'Cincin dan buket mawar' },
  { src: buketTaman, alt: 'Buket bunga taman di tangan pengantin', besar: true },
  { src: detailKalung, alt: 'Kalung mutiara tiga lapis' },
  { src: gaunJendela, alt: 'Gaun tergantung di depan jendela' },
  { src: detailSepatu, alt: 'Sepatu putih dan lengan berenda' },
];

export const hadiah = [
  { bank: 'BCA', nomor: '1234567890', nama: 'Aurelia Kirana Putri' },
  { bank: 'Mandiri', nomor: '0987654321', nama: 'Rafael Adiputra' },
];

export const alamatKado = 'Jl. Melati No. 12, Kebayoran Baru, Jakarta Selatan 12110';

/** Nomor WhatsApp penerima konfirmasi kehadiran, format 62xxxxxxxxxx. */
export const whatsapp = '6281234567890';
