// 1. Masukkan data dari Remix ke sini
const contractAddress = "0xFFD1400b698A9d26D52AbCD68CDb1f456c89Db37";
// GANTI KODE CONTRACT ABI LAMA KAMU DENGAN VERSI RAPI INI
const contractABI = [
    "function kirimJawaban(uint256 opsiQ1, uint256 opsiQ2, uint256 opsiQ3) public",
    "function ambilHasilP1() public view returns (uint256)",
    "function ambilHasilP2() public view returns (uint256)",
    "function ambilHasilP3() public view returns (uint256)"
];

let provider;
let signer;
let pollingContract;

// 2. Fungsi untuk menghubungkan Website ke MetaMask User
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Meminta izin MetaMask untuk tersambung
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Wallet terhubung:", accounts[0]);
            
            // JEMBATAN OTOMATIS (Mendeteksi otomatis apakah pakai ethers V5 atau V6)
            if (typeof ethers.providers !== 'undefined') {
                // Jalur jika web membaca Ethers.js Versi 5
                provider = new ethers.providers.Web3Provider(window.ethereum);
            } else {
                // Jalur jika web membaca Ethers.js Versi 6
                provider = new ethers.BrowserProvider(window.ethereum);
            }
            
            signer = await provider.getSigner();
            pollingContract = new ethers.Contract(contractAddress, contractABI, signer);
            
            alert("Wallet Berhasil Terhubung: " + accounts[0]);
        } catch (error) {
            console.error("User menolak koneksi wallet", error);
            alert("Koneksi dibatalkan oleh pengguna.");
        }
    } else {
        alert("MetaMask belum terdeteksi! Pastikan ekstension MetaMask sudah aktif di browser ini.");
    }
}


// HAPUS KODE LAMA DI BAGIAN ATAS FUNGSI submitJawaban() DAN GANTI DENGAN INI:
async function submitJawaban() {
    // 1. Mengambil nilai dari 1 pertanyaan yang ada di HTML (Opsi 0, 1, atau 2)
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    
    // 2. Karena di web hanya ada 1 pertanyaan, kita isi otomatis q2 dan q3 dengan angka "0"
    // Langkah ini wajib agar database Smart Contract kamu di Monad tidak kebingungan
    const q2 = "0"; 
    const q3 = "0"; 

    // 3. Validasi: Cukup pastikan pertanyaan pertama sudah dipilih oleh user
    if (q1 === undefined) {
        alert("Mohon pilih salah satu opsi jawaban terlebih dahulu!");
        return;
    }


    try {
        alert("Mohon setujui transaksi di MetaMask kamu...");
        
        // Memanggil fungsi 'kirimJawaban' yang ada di Smart Contract Solidity kamu
        const tx = await pollingContract.kirimJawaban(q1, q2, q3);
        
        // Menunggu blockchain Monad memproses transaksi (super cepat!)
        await tx.wait();
        
        alert("Selamat! Jawaban kamu telah sukses dikunci di Blockchain Monad!");
    } catch (error) {
        console.error("Transaksi gagal:", error);
        alert("Gagal mengirim suara. Catatan: 1 Wallet hanya bisa memilih 1 kali!");
    }
}
document.getElementById("connectWallet").addEventListener("click", connectWallet);

console.log(window.ethereum);
