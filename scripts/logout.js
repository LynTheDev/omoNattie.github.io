const login = () => window.location = "./index.html";

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