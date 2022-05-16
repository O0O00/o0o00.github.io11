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


if(getCookie('desert')==null){
	setCookie('desert', 'false', 1);
	setCookie('water', 'false', 1);
	setCookie('ice', 'false', 1);
}
if(getCookie('desert')=="true" && getCookie('water')=="true" && getCookie('ice')=="true") {
	document.getElementById("go").style.display = "block";
}

function desert(){
	setCookie("desert", "true", 1);
	document.location.href="/affects/desert.html"
	if(getCookie('desert')=="true" && getCookie('water')=="true" && getCookie('ice')=="true") {
		document.getElementById("go").style.display = "block";
	}
}
function water(){
	setCookie("water", "true", 1);
	document.location.href="/affects/water.html"
	if(getCookie('desert')=="true" && getCookie('water')=="true" && getCookie('ice')=="true") {
		document.getElementById("go").style.display = "block";
	}
}
function ice(){
	setCookie("ice", "true", 1);
	document.location.href="/affects/ice.html"
	if(getCookie('desert')=="true" && getCookie('water')=="true" && getCookie('ice')=="true") {
		document.getElementById("go").style.display = "block";
	}
}



