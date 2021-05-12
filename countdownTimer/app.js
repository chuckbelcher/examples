console.log("working");

const countdown = () => {
    const countDate = new Date('June 18, 2021 07:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    

    //Calculate time remaining
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    const numDays = Math.floor(gap / day);
    const numHours = Math.floor((gap % day) / hour);
    const numMinutes = Math.floor((gap % hour) / minute);
    const numSeconds = Math.floor((gap % minute) / second);
    console.log(numDays, numHours, numMinutes, numSeconds);

    document.querySelector(".day").innerText = numDays;
    document.querySelector(".hour").innerText = numHours;
    document.querySelector(".minute").innerText = numMinutes;
    document.querySelector(".second").innerText = numSeconds;

}

//run the countdown function every second
setInterval(countdown, 1000);

