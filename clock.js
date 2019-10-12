const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function clock() {
    const main = new Date();
    const month = main.getMonth();
    const date = main.getDate();
    const day = main.getDay();
    const arrDay = ["월", "화", "수", "목", "금", "토", "일"];
    const hour = main.getHours();
    const min = main.getMinutes();
    const sec = main.getSeconds();
    clockTitle.innerText = `${month+1 < 10 ? `0${month+1}` : month+1}월 ${date < 10 ? `0${date}` : date}일 ${arrDay[day]}요일 ${hour < 10 ? `0${hour}` : hour}시 ${min < 10 ? `0${min}`:min}분${sec < 10 ? `0${sec}` : sec}초`;
};

function init() {
    clock();
    setInterval(clock, 1000);
};
init();