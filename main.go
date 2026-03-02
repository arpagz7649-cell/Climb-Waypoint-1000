type Player struct {
    Username string `json:"username"`
    Password string `json:"password"`
    Point    int    `json:"point"`
    Checkpt  string `json:"last_checkpoint"`
}

// Go akan menyimpan pendaftaran acak ke database.json Master
