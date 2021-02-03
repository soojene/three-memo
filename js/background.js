const body = document.querySelector("body");
const numOfImg = 22;

function backgroundImg(randomNumber){
    const picture = new Image();
    picture.src = `img/${randomNumber}.jpg`;
    picture.classList.add("backgroundImg");
    body.appendChild(picture);
}

function pickNumber (){
    const number = Math.floor(Math.random() * numOfImg);
    return number; 
}

function init (){
    const randomNum = pickNumber();
    backgroundImg(randomNum);
}

init ();