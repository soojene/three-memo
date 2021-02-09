const paintingBtn = document.querySelector(".paintingJs"),
calculatorBtn = document.querySelector(".calculatorJs"),
paintingBoard = document.querySelector(".paintingJS"),
calculatorBoard = document.querySelector(".calculatorJS");

function handlePaintPalett(){
    paintingBoard.classList.add("showing");
    calculatorBoard.classList.remove("showing");
}

function handleOpenCalculator (){
    calculatorBoard.classList.add("showing");
    paintingBoard.classList.remove("showing");
}

paintingBtn.addEventListener("click", handlePaintPalett);
calculatorBtn.addEventListener("click", handleOpenCalculator);