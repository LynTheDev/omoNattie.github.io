"use strict";


menu = document.getElementById("menu");
menu.classList.toggle("hidden");

abt_nat= document.getElementById("abt_nat");
abt_nat.classList.toggle("hidden");

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