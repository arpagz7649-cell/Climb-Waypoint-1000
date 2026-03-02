/* * CLIMB 2: THE PATH OF JSON 
 * SCRIPT PENGATUR INTERAKSI DAN LOGIN USERNAME ACAK
 */

const MasterConfig = {
    version: "2.1.0",
    engineType: "C++ Persistence",
    warehouse: "Johnson JSON"
};

class GameController {
    constructor() {
        this.isLoggedIn = false;
        this.currentCheckpoint = "Dasar Tebing";
    }

    loginAccount(username, password) {
        console.log("Menghubungkan Master " + username + " ke server...");
        // Simulasi pengiriman data ke C++
        this.isLoggedIn = true;
        this.updateStatus("LOGIN BERHASIL: Selamat Nanjak!");
    }

    updateStatus(text) {
        const el = document.getElementById("status-display");
        if (el) el.innerText = text;
    }

    saveCheckpoint(x, y) {
        console.log("Menyimpan koordinat: " + x + ", " + y);
        // Menulis ke database.json (Johnson)
    }
}

const controller = new GameController();
