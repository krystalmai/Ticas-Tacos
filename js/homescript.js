// Hide/Show Navigation On Scroll
var prevScrollpos = window.pageYOffset;


window.onscroll = function () {

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "rgba(225, 101, 31, 1)";

    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
};
