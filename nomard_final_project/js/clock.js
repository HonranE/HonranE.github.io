const clock = document.getElementById("clock");

newTime();
setInterval(newTime,1000);

//현재 시각을 저장해 00 : 00 : 00 형식으로 출력해줌
function newTime(){
    
    const date = new Date;
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}

