// --- KONFIGURASI GUDANG & AKUN ---
let playerSession = {
    username: "",
    isPermanent: false,
    score: 0,
    lastCheckpoint: "Mulai"
};

// --- FUNGSI LOGIN (Kirim ke Go) ---
async function loginKeAkun(username, password) {
    // Di sini JS mengambil data dan mengirimnya ke mesin Go Master
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (data.success) {
        playerSession = data.playerData; // Data diambil dari JSON melalui Go
        alert("Login Berhasil! Memuat progres dari bapak-bapak NPC...");
    }
}

// --- SISTEM INTERAKSI NPC (Bapak-bapak Checkpoint) ---
const npcBapak = {
    x: 500, // Lokasi nanjak tertentu
    y: -1500,
    nama: "Bapak Penjaga Tebing",
    pesan: "Halo anak muda, mau simpan progres pendakianmu di akun selamanya?"
};

function cekInteraksi(playerX, playerY) {
    // Jika jarak Master dekat dengan bapak-bapak NPC
    let jarak = Math.sqrt(Math.pow(playerX - npcBapak.x, 2) + Math.pow(playerY - npcBapak.y, 2));
    
    if (jarak < 50) {
        document.getElementById('tombolInteraksi').style.display = 'block';
        console.log("Master bisa berinteraksi dengan: " + npcBapak.nama);
    } else {
        document.getElementById('tombolInteraksi').style.display = 'none';
    }
}

// --- FUNGSI SIMPAN (UPDATE JSON) ---
function simpanProgres() {
    if (playerSession.isPermanent) {
        // Mengirim perintah ke Go untuk menulis ke database.json
        console.log("Menyimpan data ke gudang JSON...");
        saveDataToBackend(playerSession);
        alert("Progres disimpan oleh " + npcBapak.nama + "!");
    } else {
        alert("Akun Tamu tidak bisa simpan selamanya. Masuk akun permanen dulu, Master!");
    }
}

