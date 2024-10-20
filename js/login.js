const loginForm = document.getElementById("login");
const loginName = loginForm.querySelector("input");
const loginSuccess = document.getElementById("loginSuccess");
const HIDDEN_CLASS_KEY = "hidden";
const USERNAME_KEY = "userName";
const userName = localStorage.getItem("userName");


if(userName === null){
    loginForm.classList.remove(HIDDEN_CLASS_KEY);
}else{
    const name = localStorage.getItem(USERNAME_KEY);
    onLoginSuccess(name);
}


function onLogin(event){
    event.preventDefault();
    
    const name = loginName.value;

    localStorage.setItem(USERNAME_KEY,name);
    onLoginSuccess(name);
}

//유저 정보가 있을 시 loginForm을 숨기고 인사를 보여줌
function onLoginSuccess(name){
    loginForm.classList.add(HIDDEN_CLASS_KEY);
    loginSuccess.innerText=`안녕하세요. ${name} 님, 반갑습니다.`;
    loginSuccess.classList.remove(HIDDEN_CLASS_KEY);
}

loginForm.addEventListener("submit",onLogin);
