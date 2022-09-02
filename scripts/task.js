"use strict";


const menu = document.getElementById("menu");
menu.classList.toggle("hidden");

const abt_nat = document.getElementById("abt_nat");
abt_nat.classList.toggle("hidden");

const abt_window = document.getElementById("abt_window");
abt_window.classList.toggle("hidden");

const cont_window = document.getElementById("cont_window");
cont_window.classList.toggle("hidden");

const openAbout = () => {
    abt_window.classList.toggle("visible");
}

const closeAbout = () => {
    abt_window.classList.remove("visible");
}

const openContact = () => {
    cont_window.classList.toggle("visible");
}

const closeContact = () => {
    cont_window.classList.remove("visible");
}

const startBtn = () => {
    menu.classList.toggle("visible");

    abt_nat.classList.remove("visible");
}

const showNat = () => {
    abt_nat.classList.toggle("visible");
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