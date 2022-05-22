var setCookie = function (name, value, exp) {
	var date = new Date();
	date.setTime(date.getTime() + exp * 86400 * 1000);
	document.cookie = name + '=' + value + ';expires=' + date.toUTCString();
};
var getCookie = function (name) {
	var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return value ? value[2] : null;
};
var deleteCookie = function (name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}



if (getCookie('desert') == null) {
	setCookie('desert', 'false', 1);
	setCookie('water', 'false', 1);
	setCookie('ice', 'false', 1);
}
if (getCookie('desert') == "true" && getCookie('water') == "true" && getCookie('ice') == "true") {
	changeBtnClr();
}

function desert() {
	setCookie("desert", "true", 1);
	document.location.href = "/affects/desert.html"
	if (getCookie('desert') == "true" && getCookie('water') == "true" && getCookie('ice') == "true") {
	changeBtnClr();
	}
}

function water() {
	setCookie("water", "true", 1);
	document.location.href = "/affects/water.html"
	if (getCookie('desert') == "true" && getCookie('water') == "true" && getCookie('ice') == "true") {
		changeBtnClr();
	}
}

function whitening() {
	setCookie("ice", "true", 1);
	document.location.href = "/affects/whitening.html"
	if (getCookie('desert') == "true" && getCookie('water') == "true" && getCookie('ice') == "true") {
		changeBtnClr();
	}
}

function goNext() {
	if (getCookie('desert') == "true" && getCookie('water') == "true" && getCookie('ice') == "true") {
		document.location.href = 'wswd.html';
	} else {
		alert("먼저 세 가지 항목을 모두 확인해보세요!")
	}
}

function changeBtnClr() {
	document.getElementById("go").style.color = "white";
	document.getElementById("go").style.backgroundColor = "#0094FF";
	document.getElementById("go").style.backgroundImage = "linear-gradient(85deg, #0080de 0%, #3B8DDE 100%)";
}
