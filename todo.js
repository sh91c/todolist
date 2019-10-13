const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'todos'; // 2.1. localStorage의 키 이름을 TODOS_LS로 작성

function printToDo(text) {
    // 입력 받은 to do를 리스트로 만들기 **매우 중요**
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "✔︎";
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
}

function handleInput(event) {
    event.preventDefault(); // submit 동작을 없앰.
    const currentValue = toDoInput.value;
    printToDo(currentValue); // toDo 입력되면 리스트에 출력되는 함수
    toDoInput.value = "";
}

function loadToDos() {
    // 2. localStorage에서 to do 값 불러와서 상수값으로 저장
    const toDos = localStorage.getItem(TODOS_LS);
    // 3. 나는 이름이 입력 받기 전에 todo 입력 폼이 보이지 않으면 좋겠는데,, 어떻게 해야할까
    // 3.1 => greeting.js에서 구현 완료.
    if (toDos === null) {
        // 4. 유저 이름이 null이 아니라면. 값이 있다면 toDo 입력폼이 출력되고
        //    toDoList도 함께 출력이 됨.
        // 5. to do list 저장 기능 구현하기
        toDoForm.addEventListener("submit", handleInput);
    }
}

function init() {
    // 1. to do 폼에 입력 받아 출력하기..
    loadToDos();
};
init();