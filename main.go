package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Player struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Izinkan akses dari browser (CORS)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	
	var p Player
	json.NewDecoder(r.Body).Decode(&p)

	// Simpan ke "Gudang" JSON
	file, _ := os.OpenFile("database.json", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	data, _ := json.Marshal(p)
	file.Write(append(data, '\n'))
	file.Close()

	fmt.Printf("Pemain baru terdaftar: %s\n", p.Username)
	fmt.Fprintf(w, `{"success": true, "message": "Data disimpan ke Johnson!"}`)
}

func main() {
	http.HandleFunc("/login", loginHandler)
	fmt.Println("Mesin Go berjalan di port 8080...")
	http.ListenAndServe(":8080", nil)
}
