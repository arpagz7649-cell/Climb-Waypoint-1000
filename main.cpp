#include <iostream>
#include <fstream>
#include <string>

// Struktur data untuk Akun Selamanya Master
struct Player {
    std::string username;
    std::string password;
    int point;
};

int main() {
    Player newPlayer;
    
    std::cout << "--- CLIMB 2: SISTEM GUDANG C++ ---" << std::endl;
    std::cout << "Masukkan Username Acak: ";
    std::cin >> newPlayer.username;
    std::cout << "Masukkan Password: ";
    std::cin >> newPlayer.password;
    newPlayer.point = 0; // Mulai dari dasar tebing

    // Proses simpan ke "Gudang" database.json
    std::ofstream file;
    file.open("database.json", std::ios::app); // ios::app supaya data lama nggak kehapus
    
    if (file.is_open()) {
        file << "{\"username\":\"" << newPlayer.username 
             << "\", \"password\":\"" << newPlayer.password 
             << "\", \"point\":" << newPlayer.point << "}\n";
        file.close();
        std::cout << "\n✅ DATA BERHASIL DISIMPAN PERMANEN DI JOHNSON!" << std::endl;
    } else {
        std::cout << "❌ Gagal membuka gudang data." << std::endl;
    }

    return 0;
}
