const city = document.querySelector("#weather span:first-child")
const temp = document.querySelector("#weather span:last-child")

function sucCollback(data){
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;
    const API_KEY="0a5f09bbba1e9e888e8a7c08223363a3";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data)=>{

        city.innerText = data.name;
        temp.innerText = `날씨 ${data.weather[0].main} / 온도 : ${data.main.temp}`;


    }
    );
};

function errCollback(){
    alert("당신의 위치를 파악할 수 없어 날씨정보를 불러올 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(sucCollback,errCollback);

