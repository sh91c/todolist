const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function clock() {
    const main = new Date();
    const month = main.getMonth();
    const date = main.getDate();
    const hour = main.getHours();
    const min = main.getMinutes();
    const sec = main.getSeconds();
    clockTitle.innerText = `${month}월 ${date}일 ${hour}시 ${min}분 ${sec}초`
};

function init() {
    clock();
};
init();