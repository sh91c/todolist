const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'todos'; // 2.1. localStorage의 키 이름을 TODOS_LS로 작성

const toDos = []; // 9. to do를 저장해야하는데, 이 리스트는 여러개가 출력 될 수 있음. 각 to do를 배열로 만들어 주자.
// 해야할 일을 생성할 때마다 배열 todos에 추가되도록 할 것.

// 10. localStorage에 toDos를 가져와서 저장하는 함수 구현하기.
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // * 현재 toDos의 데이터 타입은 참조 타입이다. 그래서 JSON.stringify를 사용하는데
    // ** JSON.stringify 매서드는 localStorage에 저장될 데이터 타입을 String으로 변환 시켜준다.
}

function printToDo(text) {
    // 8. * 입력 받은 to do를 리스트로 출력하기 *
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "✔︎";
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);

    // 9.2. (9)에서 toDos의 배열에 들어가게 되는데 배열은 0번째 원소부터 카운트 되니, id값을 1 증가 시켜 1부터 시작하도록 하자.
    const newId = toDos.length + 1; // 유사 배열 객체
    li.id = newId; // 9.2.1. li에 id를 할당하여 각 todo를 삭제할 수 있게 구현.
    // 9.1. 이 todoObj는 각 to do에 대한 id값, 내용 등이 들어가기에 객체로 생성
    const toDoObj = {
        text,
        id: newId
    };
    // 9.3. toDos 배열에 toDoObj를 push하여 element 하나씩 넣어주기.
    toDos.push(toDoObj);
    saveToDos();
}

function handleInput(event) {
    event.preventDefault(); // 6. submit 기본 동작을 없앰.
    const currentValue = toDoInput.value;
    printToDo(currentValue); // 7. toDo 입력되면 리스트에 출력되는 함수
    toDoInput.value = "";
}

function loadToDos() {
    // 2. localStorage에서 toDos와 User를 변수로 저장
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const currentUser = localStorage.getItem(USER_LS);
    // 3. 이름이 입력 받기 전에 todo 입력 폼이 보이지 않으면 좋겠는데,, 어떻게 해야할까
    // 3.1 => greeting.js에서 구현 완료.

    // 4. 유저 이름이 null일 떄 toDo 입력폼이 출력 X
    if (currentUser === null) {} else {
        // 4.1. 유저 이름이 생성되면 todo입력 폼이 출력이 됨.
        if (loadedToDos !== null) {
            // 11. loadedToDos에 데이터가 있다면 parse를 통해 데이터를 참조타입으로 변환
            const parsedToDos = JSON.parse(loadedToDos);
            // 11.1. forEach를 사용해서 객체의 text값만 print할 수 있도록 구현
            parsedToDos.forEach(function (toDo) {
                printToDo(toDo.text);
            });
        }
    }
}

function init() {
    // 1. to do 폼에 입력 받아 출력하기..
    loadToDos();
    // 5. to do list 저장 기능 구현하기
    toDoForm.addEventListener("submit", handleInput);
};
init();