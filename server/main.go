package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func updateHeaders(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func handleOption(w http.ResponseWriter, r *http.Request) {
	updateHeaders(&w)
	w.WriteHeader(http.StatusNoContent)
	return
}

func handleFetchUsers(w http.ResponseWriter, r *http.Request) {
	updateHeaders(&w)
	users := fetchUsers()
	json.NewEncoder(w).Encode(users)
}

func handleCreateUser(w http.ResponseWriter, r *http.Request) {
	updateHeaders(&w)
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}
	var user user_struct
	err = json.Unmarshal(body, &user)
	if err != nil {
		panic(err)
	}
	createUser(user.Name)
}

func handleUpdateUser(w http.ResponseWriter, r *http.Request) {
	updateHeaders(&w)
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}
	params := mux.Vars(r)
	ID, ok := params["id"]
	if ok != true {
		json.NewEncoder(w).Encode("No such user")
	}
	var user user_struct
	err = json.Unmarshal(body, &user)
	if err != nil {
		panic(err)
	}
	updateUser(ID, user.Name)
}

func handleDeleteUser(w http.ResponseWriter, r *http.Request) {
	updateHeaders(&w)
	params := mux.Vars(r)
	ID, ok := params["id"]
	if ok != true {
		json.NewEncoder(w).Encode("No such user")
	}
	deleteUser(ID)
}

func main() {
	fmt.Println("Server is working")

	initDB()
	defer closeDB()
	r := mux.NewRouter()
	r.Methods("OPTIONS").HandlerFunc(handleOption)
	r.HandleFunc("/users", handleFetchUsers).Methods("GET")
	r.HandleFunc("/users", handleCreateUser).Methods("POST")
	r.HandleFunc("/users/{id}", handleUpdateUser).Methods("PUT")
	r.HandleFunc("/users/{id}", handleDeleteUser).Methods("DELETE")
	log.Fatal(http.ListenAndServe(":8080", r))
}
