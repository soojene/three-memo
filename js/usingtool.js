const paintingBtn = document.querySelector(".paintingJs"),
calculatorBtn = document.querySelector(".calculatorJs"),
paintingBoard = document.querySelector(".paintingJS"),
calculatorBoard = document.querySelector(".calculatorJS");

function handlePaintPalett(){
    paintingBoard.classList.add("showing");
    calculatorBoard.classList.remove("showing");
    console.log(paintingBoard);
}

function handleOpenCalculator (){
    calculatorBoard.classList.add("showing");
    paintingBoard.classList.remove("showing");
    console.log(calculatorBoard);
}

paintingBtn.addEventListener("click", handlePaintPalett);
calculatorBtn.addEventListener("click", handleOpenCalculator);