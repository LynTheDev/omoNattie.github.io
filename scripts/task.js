"use strict";


const menu = document.getElementById("menu");
const cont_window = document.getElementById("cont_window");
const abt_window = document.getElementById("abt_window");
const text_window = document.getElementById("text_window");
const abt_nat = document.getElementById("abt_nat");

menu.classList.toggle("hidden");
abt_nat.classList.toggle("hidden");
abt_window.classList.toggle("hidden");
cont_window.classList.toggle("hidden");
text_window.classList.toggle("hidden");



const openAbout = () => {
    abt_window.classList.toggle("visible"); //for the about window
}

const closeAbout = () => {
    abt_window.classList.remove("visible"); // close about window
}

const openContact = () => {
    cont_window.classList.toggle("visible"); //for the contact window
}

const closeContact = () => {
    cont_window.classList.remove("visible"); // close contact window
}

const openText = () => {
    text_window.classList.toggle("visible"); //for the text window
}

const closeText = () => {
    text_window.classList.remove("visible"); // close text window
}

const showNat = () => {
    abt_nat.classList.toggle("visible"); // show the nat menu
}

const startBtn = () => {
    menu.classList.toggle("visible");

    abt_nat.classList.remove("visible");
}

const clock = () => {
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;

    let time = `${hrs}:${mins}`;
    setInterval(clock, 60000);

    document.getElementById("clock").innerHTML = time;

}

clock();