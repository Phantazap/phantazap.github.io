package main

import (
	"flag"
	"fmt"
	"strconv"
)

const BaseUrl = "http://3ds.pokemon-gl.com/share/images/pokemon"

func getUrl(n, id int) string {
	r := 0x159a55e5 * uint(n+id*0x10000) & 0xffffff
	return fmt.Sprintf("%s/300/%06x.png", BaseUrl, r)
}

func main() {
	flag.Parse()
	nStr := flag.Arg(0)
	fStr := flag.Arg(1)

	n, _ := strconv.Atoi(nStr)
	f, _ := strconv.Atoi(fStr)

	url := getUrl(n, f)
	fmt.Println(url)
}
