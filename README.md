# Ridho & Karina — Halaman Pasangan

Landing page statis bernuansa putih bersih, dibuat dengan [Astro](https://astro.build). Semua bagiannya bisa disentuh atau bergerak mengikuti gulir, dan fotonya bisa diganti langsung dari halaman.

## Isi halaman

| Bagian | Interaksi |
| --- | --- |
| Sampul | Sapaan untuk pengunjung dari tautan (`?to=Nama`); tombol **Buka** menggeser sampul ke atas |
| Pembuka | Foto dalam bingkai lengkung terbuka seperti tirai, kelopak bunga berjatuhan, efek paralaks |
| Kutipan | Kata-kata menyala satu per satu mengikuti gulir |
| Tentang kami | Foto miring mengikuti kursor dan berkilau; sentuh untuk berganti ke foto kedua |
| Sudah bersama | Penghitung hari, jam, menit, dan detik sejak tanggal di data |
| Momen kecil | Di layar lebar bagian ini menempel dan fotonya bergeser mendatar saat digulir; di ponsel diusap ke samping |
| Galeri | Kisi foto yang terbuka bergiliran; sentuh untuk layar penuh (tombol, panah keyboard, usap, Esc) |
| Pesan | Buku tamu yang dikirim lewat WhatsApp; pesan tersimpan di peramban pengunjung |

Semua animasi dimatikan otomatis bila perangkat meminta gerak dikurangi (`prefers-reduced-motion`).

## Mengganti foto dari halaman (Atur foto)

Buka halaman dengan tambahan `?atur`, misalnya `https://ridhoo1616.github.io/wedding-landing/?atur`. Tombol **Atur foto** muncul di pojok kanan atas.

- **Ganti** mengganti satu slot. Fotonya ikut berganti di semua tempat slot itu tampil, termasuk galeri dan penampil layar penuh.
- **Pilih banyak sekaligus** mengisi slot berurutan dari atas.
- **Bawaan** / **Kembalikan semua** memulihkan foto awal.

Foto disimpan di peramban perangkat itu saja (IndexedDB), diperkecil ke 1600 px, dan **tidak diunggah ke mana pun**. Pengunjung lain tetap melihat foto bawaan. Untuk mengganti foto bagi semua pengunjung, ikuti langkah di bawah.

## Menjalankan

Butuh Node.js 22 atau lebih baru.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil statis di dist/
npm run preview
```

## Mengganti isi

Semua teks, tanggal mulai bersama, nomor WhatsApp, dan daftar foto ada di **`src/data/halaman.ts`**.

Untuk mengganti foto bawaan (tampil untuk semua pengunjung), pakai foto yang memang milik Anda atau yang boleh Anda pakai:

1. Taruh foto baru di `src/assets/foto/`. Foto tegak paling cocok untuk sampul, tentang kami, dan momen kecil.
2. Ubah baris `import` yang sesuai di `src/data/halaman.ts`, atau timpa berkas lama dengan nama yang sama.
3. Bila wajah terpotong, atur `fokus` (format CSS `object-position`, mis. `'50% 30%'` agar potongan bergeser ke atas).

Astro mengecilkan dan mengubah foto ke WebP saat build, jadi foto asli boleh berukuran besar.

## Memasang di GitHub Pages

1. Jadikan repositori publik (Pages untuk repositori privat butuh GitHub Pro).
2. Buka **Settings → Pages**, pilih **Source: GitHub Actions**.
3. Buka tab **Actions → Pasang ke GitHub Pages → Run workflow**. Ulangi langkah ini setiap kali ada perubahan.

Situs akan tersedia di `https://<username>.github.io/wedding-landing/`. Bila dipasang di domain sendiri (Netlify, Vercel, Cloudflare Pages), cukup jalankan `npm run build` dan unggah folder `dist/`.

## Kredit

Foto contoh berlisensi CC0 dari rawpixel; daftarnya di [`src/assets/foto/KREDIT.md`](src/assets/foto/KREDIT.md). Huruf: Cormorant Garamond, Pinyon Script, dan Jost (SIL Open Font License).
