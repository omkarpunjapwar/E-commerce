var menudiv = document.getElementById("menudiv");
var menu = document.getElementById("menu");
var arrow = document.getElementById("arrow");
var listmenu2 = document.getElementById("listmenu2");

menu.onclick = function () {
  menutab.classList.toggle("hide");
  arrow.classList.toggle("rotates");
};
listmenu2.onclick = function () {
  menutab.classList.toggle("hide");
  arrow.classList.toggle("rotates");
};

var menudiv = document.getElementById("menudiv");
var menu2 = document.getElementById("menu2");
var x = document.getElementById("x");
var listmenu = document.getElementsByClassName("listmenu");

menu2.onclick = function () {
  menutab2.classList.toggle("hide");
};
x.onclick = function () {
  menutab2.classList.toggle("hide");
};
