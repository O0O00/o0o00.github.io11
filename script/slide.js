function slide() {
	let value = document.getElementById("slider").value;
	document.getElementById("resize").style.clipPath = "polygon(0 0," + value +"% 0," + value +"% 100%,0 100%)";
}
