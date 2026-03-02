#include <iostream>
#include <vector>
#include <string>
#include <fstream>

// Struktur data untuk mengelola memori pendakian Master
struct Progress {
    int score;
    std::string checkpoint_name;
    float position_x;
    float position_y;
};

class ClimbEngine {
public:
    void saveToJohnson(std::string username, Progress p) {
        std::ofstream file;
        file.open("database.json", std::ios::app);
        if (file.is_open()) {
            file << "{\"user\":\"" << username << "\", \"score\":" << p.score << "}\n";
            file.close();
            std::cout << "Data Master berhasil disimpan ke Gudang JSON." << std::endl;
        }
    }
    
    void talkToBapakNPC() {
        std::cout << "Bapak NPC: Halo Master, mau simpan progres?" << std::endl;
    }
};

int main() {
    ClimbEngine engine;
    Progress currentProgress = {100, "Tebing Curam", 25.5, 50.0};
    engine.talkToBapakNPC();
    engine.saveToJohnson("Master_User", currentProgress);
    return 0;
}
