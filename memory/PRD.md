# Nano Fruits Pedia — PRD

## Problem Statement
Website modern & sleek "Nano Fruits Pedia" (dibuat oleh C# Group) berisi informasi ekstensif tentang 6 tanaman: Mangga, Nangka, Belimbing (star fruit), Lidah Buaya (aloe vera), Jambu Biji (guava), dan Palem Putri (princess palm). Terdapat "lobby" dengan section tiap tanaman yang mengarah ke halaman khusus. Bahasa Indonesia.

## User Choices
- Ilustrasi: Foto asli berkualitas tinggi (stok foto Unsplash/Pexels)
- Info per tanaman: Deskripsi umum, klasifikasi ilmiah, manfaat/nutrisi, panduan penanaman & perawatan
- Tema: Segar & natural (botanikal, hijau, earthy) — theme "ORGANIC & EARTHY"
- Fitur tambahan: optimasi perangkat spek rendah + efek background interaktif mengikuti scroll (parallax)
- Konten: dibuat otomatis (Bahasa Indonesia)

## Architecture
- Frontend-only React app (tidak ada backend/DB/auth yang dibutuhkan).
- Data tanaman statis di `/app/frontend/src/data/plants.js`.
- Routing react-router-dom: `/` (lobby) & `/tanaman/:slug` (detail).
- Font: Cormorant Garamond (heading) + DM Sans (body).
- Efek parallax ringan via framer-motion `useScroll`/`useTransform` (menghormati prefers-reduced-motion), sedikit node DOM untuk perangkat spek rendah.

## Implemented (2026-06)
- Lobby bento grid dengan 6 kartu tanaman + hero + statistik.
- Halaman detail: hero foto + overlay, deskripsi, manfaat, panduan perawatan (ikon), sidebar klasifikasi ilmiah & nutrisi, "Jelajahi Lainnya".
- Header glassmorphism sticky + Footer kredit "C# Group".
- Background parallax daun mengikuti scroll.

## Backlog / Next
- P1: Fitur pencarian tanaman.
- P2: Kuis interaktif / kolom komentar.
- P2: Mode gelap.
