var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");

function clicked1() {
    div1.classList.add("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
    div4.classList.remove("active");
    div5.classList.remove("active");
}

function clicked2() {
    div2.classList.add("active");
    div1.classList.remove("active");
    div3.classList.remove("active");
    div4.classList.remove("active");
    div5.classList.remove("active");
}

function clicked3() {
    div3.classList.add("active");
    div2.classList.remove("active");
    div1.classList.remove("active");
    div4.classList.remove("active");
    div5.classList.remove("active");
}

function clicked4() {
    div4.classList.add("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
    div1.classList.remove("active");
    div5.classList.remove("active");
}

function clicked5() {
    div5.classList.add("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
    div4.classList.remove("active");
    div1.classList.remove("active");
}