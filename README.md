# 💜 Monad Pulse: Your Voice On-Chain

Aplikasi polling terdesentralisasi yang responsif, transparan, dan anti-manipulasi yang dibangun khusus untuk ekosistem **Monad Blitz**. Project ini mengintegrasikan tampilan Web2 yang modern dengan keamanan database *Smart Contract* di atas jaringan blockchain Monad Testnet.

---

## 🚀 Fitur Utama Project

* **Decentralized Governance:** Semua suara dikunci permanen di jaringan blockchain Monad, menjamin transparansi 100%.
* **Anti-Syuabil / Sybil Resistance:** Aturan ketat pada *Smart Contract* memastikan **1 Alamat Wallet hanya bisa melakukan voting sebanyak 1 kali**.
* **Ultra-Fast Speed:** Memanfaatkan keunggulan performa kilat dan efisiensi *gas fee* dari jaringan Monad.
* **Web3 Integration:** Menggunakan pustaka `ethers.js` untuk menjembatani interaksi form HTML secara langsung dengan ekstensi MetaMask pengguna.

---

## 🛠️ Spesifikasi Teknologi (Tech Stack)

| Komponen | Teknologi | Peran / Fungsi |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 | Membangun antarmuka visual yang modern, estetik, dan responsif. |
| **Web3 Bridge** | JavaScript (ES6), Ethers.js (v5) | Menghubungkan elemen interaktif tombol Web ke ekstensi MetaMask user. |
| **Smart Contract** | Solidity (v0.8.20) | Menjadi database terdesentralisasi yang mengunci data voting secara aman. |
| **Network** | Monad Testnet | Infrastruktur blockchain utama tempat project ini dijalankan. |
| **Tools** | Remix IDE, GitHub | Lingkungan pengembangan kode (*development environment*) dan kolaborasi tim. |

---

## 🗺️ Roadmap & Alur Kerja Sistem

[ User Memilih Opsi ]
│
▼
[ Klik Tombol 'Cast My Vote' ] ──► Picu Script app.js
│
▼
[ Pop-up MetaMask Muncul ] ◄────── Approve Gas Fee ($MON)
│
▼
[ Blockchain Monad ] ────────────► Data Dikunci & Suara Bertambah (+1)


---

## 📝 Informasi Kontrak & Transaksi (Deployment)

* **Network Name:** Monad Testnet
* **Currency Symbol:** MON
* **Smart Contract Address:** `0xFFD1400b698A9d26D52AbCD68CDb1f456c89Db37`

---

## 👥 Anggota Tim & Pembagian Tugas

Project ini dibangun secara kolaboratif oleh tim yang terdiri dari 2 orang dengan spesialisasi tugas yang berimbang:

* **[Husain Fadhillah Amal]** — *Frontend Developer*
  * Mendesain tata letak visual aplikasi kuesioner menggunakan HTML dan CSS.
  * Memastikan tampilan web responsif di berbagai ukuran perangkat.
* **[Muhammad Dedy]** — *Web3 & Backend Engineer*
  * Menulis dan mendeploy kode *Smart Contract* Solidity via Remix IDE.
  * Mengonfigurasi jaringan Monad Testnet dan menyusun logika jembatan JavaScript (`app.js`).

---

## 💻 Cara Menjalankan Project Secara Lokal

1. **Clone / Download ZIP** repository project ini ke komputer lokal Anda.
2. Pastikan browser Anda (Chrome/Brave) sudah terpasang ekstensi **MetaMask**.
3. Alihkan jaringan MetaMask Anda ke **Monad Testnet** dan pastikan memiliki saldo koin uji coba (\$MON) dari *faucet*.
4. Buka folder project, jalankan file `monad.html` menggunakan fitur **Live Server** di VS Code (`http://127.0.0.1:5500`).
5. Klik **Connect Wallet**, pilih opsi opini Anda, dan klik **Cast My Vote** untuk mengirimkan data ke blockchain!
