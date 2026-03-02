/* CLIMB 2: THE PATH OF JSON - CORE ENGINE
   Sistem kurir data untuk Akun Selamanya Master
*/

const gameEngine = {
    player: {
        username: "Guest",
        points: 0,
        inventory: []
    },
    config: {
        apiEndpoint: "/save",
        storageType: "JSON_WAREHOUSE"
    },
    // Fungsi untuk bicara ke C++ dan Gudang JSON
    initSession: function(name) {
        this.player.username = name;
        console.log("Master " + name + " sedang nanjak...");
        this.updateStatus("Menghubungkan ke Johnson...");
    },
    updateStatus: function(msg) {
        const statusEl = document.getElementById('status');
        if(statusEl) statusEl.innerText = msg;
    },
    saveProgress: function(x, y) {
        const data = { x: x, y: y, timestamp: Date.now() };
        console.log("Progress disimpan: ", data);
        // Mengirim data ke Johnson via C++
        return JSON.stringify(data);
    }
};

// Menangani tombol interaksi bapak-bapak NPC
function interaksiNPC() {
    gameEngine.initSession("Master_Admin");
    gameEngine.saveProgress(100, 500);
}
