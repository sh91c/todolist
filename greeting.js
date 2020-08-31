const form = document.querySelector(".js-inputName"),
    intro = form.querySelector(".js-msg"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    // todo.js 에서 js-toDoForm을 불러 유저 이름이 입력되면 toDoForm이 출력되기 위함
    hide = document.querySelector(".js-toDoForm");

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function printUser(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    hide.classList.add(SHOWING_CN); // 유저 이름이 입력되면 ToDo 폼이 보이도록 showing 클래스 추가
    greeting.innerText = `Have a good time! ${text}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    printUser(currentValue);
    saveName(currentValue);
}

function msg() {
    intro.innerText = `Nice to meet you!`;
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    msg();
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        askForName();
    } else {
        printUser(currentUser);
    }
}

function init() {
    loadName();
};

init();