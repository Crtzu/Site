var button = document.getElementById("button")
var nume = document.getElementById("nume")
var contact=document.getElementById("contact")
var asteptari=document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var table = document.querySelector("table")

button.addEventListener("click", altaViata)

function altaViata() {

	nume.innerHTML = "Web Developer"
	contact.innerHTML = "Steam"
	asteptari.innerHTML = "<ul><li>Bani</li></ul>"
	img.src = "flashbang.png"
	table.display = "none"
	

}