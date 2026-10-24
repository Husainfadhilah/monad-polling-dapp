// 1. Masukkan data dari Remix ke sini
const contractAddress = "0xFFD1400b698A9d26D52AbCD68CDb1f456c89Db37";
const contractABI = [ [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "opsiQ1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "opsiQ2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "opsiQ3",
				"type": "uint256"
			}
		],
		"name": "kirimJawaban",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ambilHasilP1",
		"outputs": [
			{
				"internalType": "uint256[3]",
				"name": "",
				"type": "uint256[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ambilHasilP2",
		"outputs": [
			{
				"internalType": "uint256[3]",
				"name": "",
				"type": "uint256[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ambilHasilP3",
		"outputs": [
			{
				"internalType": "uint256[3]",
				"name": "",
				"type": "uint256[3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jumlahSuaraPertanyaan1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jumlahSuaraPertanyaan2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jumlahSuaraPertanyaan3",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "sudahMilih",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] ];

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


// 3. Fungsi untuk mengirim jawaban kuesioner ke Blockchain Monad
async function submitJawaban() {
    // Mengambil nilai pilihan jawaban dari HTML buatan temanmu (Opsi 0, 1, atau 2)
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;

    if (!q1 || !q2 || !q3) {
        alert("Mohon jawab semua pertanyaan terlebih dahulu!");
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
