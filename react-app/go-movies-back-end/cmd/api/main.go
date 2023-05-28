package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// set application config
	var app application

	// connect to database
	app.Domain = "example.com"
	http.HandleFunc("/", Hello)

	log.Println("Starting application on port:", port)
	// start a web browser
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		log.Fatal(err)
	}
}
