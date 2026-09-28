# Undangan Pernikahan — Landing Page Statis

Landing page undangan pernikahan bernuansa putih bersih, dibuat dengan [Astro](https://astro.build). Foto-fotonya menonjolkan **pengantin wanita**, dan semua bagiannya bisa disentuh atau bergerak mengikuti gulir.

## Isi halaman

| Bagian | Interaksi |
| --- | --- |
| Sampul | Nama tamu diambil dari tautan (`?to=Nama+Tamu`); tombol **Buka Undangan** menggeser sampul ke atas |
| Pembuka | Foto dalam bingkai lengkung terbuka seperti tirai, kelopak bunga berjatuhan, efek paralaks |
| Kutipan | Kata-kata menyala satu per satu mengikuti gulir |
| Mempelai | Foto mempelai wanita miring mengikuti kursor dan berkilau; sentuh untuk berganti ke foto kedua |
| Hitung mundur | Berjalan per detik, dengan tombol simpan ke Google Kalender |
| Detail kecil | Di layar lebar bagian ini menempel dan fotonya bergeser mendatar saat digulir; di ponsel diusap ke samping |
| Acara | Kartu akad dan resepsi, tautan peta, latar foto paralaks |
| Galeri | Kisi foto yang terbuka bergiliran; sentuh untuk layar penuh (tombol, panah keyboard, usap, Esc) |
| Doa & ucapan | Formulir RSVP yang dikirim lewat WhatsApp; ucapan tersimpan di peramban tamu |
| Amplop digital | Salin nomor rekening dan alamat kado dengan satu klik |

Semua animasi dimatikan otomatis bila perangkat meminta gerak dikurangi (`prefers-reduced-motion`).

## Menjalankan

Butuh Node.js 22 atau lebih baru.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil statis di dist/
npm run preview
```

## Mengganti isi

Semua teks, tanggal, rekening, nomor WhatsApp, dan daftar foto ada di **`src/data/undangan.ts`**.

Untuk mengganti foto:

1. Taruh foto baru di `src/assets/foto/`. Foto potret (tegak) paling cocok untuk sampul, mempelai, dan detail kecil.
2. Ubah baris `import` yang sesuai di `src/data/undangan.ts`, atau timpa berkas lama dengan nama yang sama.
3. Bila wajah terpotong, atur `fokus` (format CSS `object-position`, mis. `'50% 30%'` agar potongan bergeser ke atas).

Astro mengecilkan dan mengubah foto ke WebP saat build, jadi foto asli boleh berukuran besar.

## Memasang di GitHub Pages

1. Jadikan repositori publik (Pages untuk repositori privat butuh GitHub Pro).
2. Buka **Settings → Pages**, pilih **Source: GitHub Actions**.
3. Buka tab **Actions → Pasang ke GitHub Pages → Run workflow**.

Situs akan tersedia di `https://<username>.github.io/wedding-landing/`. Bila dipasang di domain sendiri (Netlify, Vercel, Cloudflare Pages), cukup jalankan `npm run build` dan unggah folder `dist/`.

## Kredit

Foto contoh berlisensi CC0 dari rawpixel; daftarnya di [`src/assets/foto/KREDIT.md`](src/assets/foto/KREDIT.md). Huruf: Cormorant Garamond, Pinyon Script, dan Jost (SIL Open Font License).
