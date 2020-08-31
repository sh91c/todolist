const weather = document.querySelector(".js-weather");

// 4. 날씨 OPEN API KEY
const API_KEY = "147b330bea991d600a09cb78271abf36";
const COORDS = 'coords';

// 4.1 날씨 불러오는 함수 구현 / 매개변수 이름은 OPEN API 매뉴얼 참고.
// 위치를 읽어 왔을 경우에 실행이 되어야 하니, handleGeoSuccess()에서 실행
function getWeather(lat, lng) {
    // 4.2 데이터를 가져올 땐 fetch 함수 사용
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const day = json.weather[0].main;
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}℃ ${day} @ ${place}`;
        });
}

// 3.1. 좌표 저장하기 (날씨를 불러오기 위한 현재 위치 가져오기 구현 완료)
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    // console.log(position);
    // 3. position -> coords -> latitude, longitude를 변수로 저장
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

function handleGeoError() {
    console.log("Can't access GEO localtion!");
};

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    // 2. navigator.geolocation.getCurrentPosition(argue1, argue2);
    //    argue1 -> 위치를 읽어 왔을 때, argue2 -> 위치를 읽어 오지 못했을 때
}

// 1. 위치 읽어오기
function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) { // 1.1. 위치 값이 없을 때
        askForCoords(); // 1.2. 위치를 읽어오는 함수 실행
    } else {
        // getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();