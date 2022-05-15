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
var slider = document.getElementById("slider");
function moveDivisor() {
	divisor.style.width = slider.value + "%";
}



if(getCookie('desert')==null){
	setCookie('desert', 'no', 1);
	setCookie('water', 'no', 1);
	setCookie('ice', 'no', 1);
}
function desert(){
	setCookie("desert", "true", 1);
	document.location.href="/affects/desert.html"
}
function water(){
	setCookie("water", "true", 1);
	document.location.href="/affects/water.html"
}
function ice(){
	setCookie("ice", "true", 1);
	document.location.href="/affects/ice.html"
}