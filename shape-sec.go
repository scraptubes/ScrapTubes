package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

func main() {

	url := "https://scraptubes.p.rapidapi.com/shape"

	payload := strings.NewReader("{\n    \"url\": \"https://m.tiktok.com/api/commit/item/digg/?\",\n    \"cookies\": \"\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("X-RapidAPI-Key", "RAPID-API-KEY")
	req.Header.Add("X-RapidAPI-Host", "scraptubes.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
