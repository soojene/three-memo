const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll(".jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveImg = document.getElementById("jsSave");

const initialColor = "#000000";

//캔버스 태그에 사이즈를 입력하면 따로 사이즈를 주지 않아도 작동되는듯함.

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "initialColor";
ctx.fillStyle = "initialColor";
ctx.lineWidth = 2.5;

// 한번 클릭이 될때 바뀌고 다시 클릭될때 원래대로 변경되야 할때 변수를 정해준다.
let painting = false;
let filling = false; 

function stopPainting (){
    painting = false; 
}

function startPainting (event){
    painting = true;
    if (filling){
        ctx.fillStyle
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

//onMouseMove함수에서 x값과 y값이 계속 바뀌기 때문에 이 함수안에서 코드 작성을 한다.
//마우스를 누를때 라인이 그려져야해서 조건문으로 작성.
function onMouseMove(event){
    const x = event.offsetX; //offsetX은 캔버스안의 마우스 X위치
    const y = event.offsetY;
    if (!painting){
        ctx.beginPath(); //선을 그릴때 시작해야 하는 함수
        // ctx.moveTo(x, y);//선(path)의 시작지점
        } else {
        ctx.lineTo(x, y); //선 시작점에서 연결되는 마무리지점.
        ctx.stroke(); // 아웃라인으로 선(path)을 표시할때 사용
    }
}

function rightClickHandle (event){
    event.preventDefault();
}

function changeColorHandler(event){
    console.log(event.target.style.backgroundColor);
    const lineColor = event.target.style.backgroundColor;
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = lineColor;
}

function changeRangeHandler(event){
    const lineWidth = event.target.value;
    ctx.lineWidth = lineWidth;
}

function paintModeChange(){ 
    if (filling == false){
        filling = true;
        mode.innerText = "PAINT";
    }
    else {
        filling = false;
        mode.innerText = "FILL"; 
    }
}

function handleSaveImg (){
    const image = canvas.toDataURL("image/png");
    const imgLink = document.createElement("a");
    imgLink.href = image;
    imgLink.download = "PAINT[🌈]"
    imgLink.click();
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("contextmenu", rightClickHandle);
}

Array.from(colors).forEach(color=>
    color.addEventListener("click",changeColorHandler)
    );

if(range){
    range.addEventListener("input", changeRangeHandler);
}

if(mode){
    mode.addEventListener("click", paintModeChange);
}

if (saveImg){
    saveImg.addEventListener("click", handleSaveImg);
}