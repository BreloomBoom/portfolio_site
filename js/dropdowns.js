const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const link = document.getElementById("link");
const about = document.getElementById("about");
const proj1 = document.getElementById("proj1");
const proj2 = document.getElementById("proj2");
const proj3 = document.getElementById("proj3");

function dropdown1() {
    if (link.classList.contains("visible")) {
        link.classList.remove("visible");
        link.classList.add("hidden");

        two.classList.remove("visible");
        two.classList.add("hidden");

        three.classList.remove("visible");
        three.classList.add("hidden");

        four.classList.remove("visible");
        four.classList.add("hidden");

        about.classList.add("visible");
        about.classList.remove("hidden");
    } else {
        link.classList.add("visible");
        link.classList.remove("hidden");

        two.classList.add("visible");
        two.classList.remove("hidden");

        three.classList.add("visible");
        three.classList.remove("hidden");

        four.classList.add("visible");
        four.classList.remove("hidden");

        about.classList.remove("visible");
        about.classList.add("hidden");
    }
}

function dropdown2() {
    if (link.classList.contains("visible")) {
        link.classList.remove("visible");
        link.classList.add("hidden");

        one.classList.remove("visible");
        one.classList.add("hidden");

        three.classList.remove("visible");
        three.classList.add("hidden");

        four.classList.remove("visible");
        four.classList.add("hidden");

        proj1.classList.add("visible");
        proj1.classList.remove("hidden");
    } else {
        link.classList.add("visible");
        link.classList.remove("hidden");

        one.classList.add("visible");
        one.classList.remove("hidden");

        three.classList.add("visible");
        three.classList.remove("hidden");

        four.classList.add("visible");
        four.classList.remove("hidden");

        proj1.classList.remove("visible");
        proj1.classList.add("hidden");
    }
}

function dropdown3() {
    if (link.classList.contains("visible")) {
        link.classList.remove("visible");
        link.classList.add("hidden");

        one.classList.remove("visible");
        one.classList.add("hidden");

        two.classList.remove("visible");
        two.classList.add("hidden");

        four.classList.remove("visible");
        four.classList.add("hidden");

        proj2.classList.add("visible");
        proj2.classList.remove("hidden");
    } else {
        link.classList.add("visible");
        link.classList.remove("hidden");

        one.classList.add("visible");
        one.classList.remove("hidden");

        two.classList.add("visible");
        two.classList.remove("hidden");

        four.classList.add("visible");
        four.classList.remove("hidden");

        proj2.classList.remove("visible");
        proj2.classList.add("hidden");
    }
}

function dropdown4() {
    if (link.classList.contains("visible")) {
        link.classList.remove("visible");
        link.classList.add("hidden");

        one.classList.remove("visible");
        one.classList.add("hidden");

        three.classList.remove("visible");
        three.classList.add("hidden");

        two.classList.remove("visible");
        two.classList.add("hidden");

        proj3.classList.add("visible");
        proj3.classList.remove("hidden");
    } else {
        link.classList.add("visible");
        link.classList.remove("hidden");

        one.classList.add("visible");
        one.classList.remove("hidden");

        three.classList.add("visible");
        three.classList.remove("hidden");

        two.classList.add("visible");
        two.classList.remove("hidden");

        proj3.classList.remove("visible");
        proj3.classList.add("hidden");
    }
}