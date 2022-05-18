function slide() {
	let value = document.getElementById("slider").value;
	document.getElementById("resize").style.clipPath = "polygon(0 0," + value +"% 0," + value +"% 100%,0 100%)";
}


window.onload = function() {
	var agent = navigator.userAgent.toLowerCase();

if (agent.indexOf("chrome") == -1) {
alert("본 페이지는 크롬 브라우저에 맞추어 제작되었습니다.\n타 브라우저 이용시 페이지가 깨져 보일 수도 있습니다.");
}
}