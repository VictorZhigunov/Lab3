$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});


var Theme_number = 1;
var Default_theme = 1;
var Source = "less";
var Dist = "css";
var Ext = "less";

function getUrl(num) {
    return Dist + "/" + Ext + ".style" + num + ".css";
}

function getThemeNumber() {
    Theme_number = Theme_number % 2 === 0 ? 1 : 2;
    console.log(Theme_number);
    return Theme_number;
}

function initialize() {
    var link = document.createElement("link");
    link.setAttribute("id", "theme-style")
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", getUrl(Default_theme));
    document.head.appendChild(link);
}

function initListener() {
    document
        .querySelector(".mynav__theme")
        .addEventListener("click", changeTheme);
}

function changeTheme() {
    document.head
        .querySelector("link#theme-style")
        .setAttribute("href", getUrl(getThemeNumber()));
}

initialize();

window.addEventListener("load", initListener);

