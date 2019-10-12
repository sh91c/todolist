const form = document.querySelector(".js-inputName"),
    intro = form.querySelector(".js-msg"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function printUser(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
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