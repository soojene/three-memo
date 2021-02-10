const askForm = document.querySelector(".nameFormJs"),
nameInput = askForm.querySelector(".nameInputJs"),
userName = document.querySelector(".userNameJs");

const userKey = "userName";
let userValue ="";

function saveUser(userName){
    localStorage.setItem("userKey", userName);
}

function helloUser (name){
    userName.innerText = `Hello, ${name}!`;
    userName.classList.add("showing");
}

function wellcomeUser(){
    const localUserName = localStorage.getItem("userKey");
    if(localUserName == null){
        nameInput.classList.add("showing");
        console.log("ask name");
    } else{
        helloUser(localUserName);
        console.log("I got name!");
    }
}

function handleSaveName(event){
    event.preventDefault();//안하면 submit후 바로 창이 새로고침이 됨.
    userValue = nameInput.value;
    saveUser(userValue);
    nameInput.value="";
    nameInput.classList.remove("showing");
    wellcomeUser();
}

wellcomeUser();

if (askForm){
    askForm.addEventListener("submit", handleSaveName)
}