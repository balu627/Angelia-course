document.addEventListener("DOMContentLoaded", function() {
    let time = 30;
    const countdownEle = document.querySelector(".timer");

    let interval = setInterval(updateCountdown, 100);

    function updateCountdown() {
        countdownEle.innerHTML = `${time}`;
        time--;
        if(time<0)
            {
                clearInterval(interval);
            }
    }
});
