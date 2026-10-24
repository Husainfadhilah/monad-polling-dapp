
const connectWallet = document.getElementById("connectWallet");
const pesan = document.getElementById("pesan");

connectWallet.addEventListener("click", function () {
    pesan.textContent = "✓ Connect Wallet berhasil diklik!";
    pesan.style.display = "block";
    pesan.style.color = "#34d399";
    pesan.style.padding = "15px";
    pesan.style.backgroundColor = "#102c28";
    pesan.style.borderRadius = "12px";
});
document.getElementById("connectWallet")
document.getElementById("pesan")