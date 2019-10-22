let fieldArr = document.querySelectorAll(".field");
let val = 'X';
let wonText = document.querySelector(".won-text");
let won = document.querySelector(".won");
let isRunning = true

let field1 = document.querySelector(".field-1");
let field2 = document.querySelector(".field-2");
let field3 = document.querySelector(".field-3");
let field4 = document.querySelector(".field-4");
let field5 = document.querySelector(".field-5");
let field6 = document.querySelector(".field-6");
let field7 = document.querySelector(".field-7");
let field8 = document.querySelector(".field-8");
let field9 = document.querySelector(".field-9");

function checkIfFull(){
    for(var i = 0; i < fieldArr.length; i++) {
        if(fieldArr[i].innerHTML.length === 0){
            return false;
        }
    }
    return true;
}

function clearField(){
    fieldArr.forEach(function(elem) {
        elem.innerHTML = ""
    });
}

function resetGame(){
    document.querySelector(".restartBtn").addEventListener("click", function(){
        isRunning = true
        clearField();
        val = "X"
        wonText.innerHTML = "Tic Tac Toe"
    });
}

function checkWin(){

    if(
        (field1.innerHTML === "X" && field2.innerHTML === "X" && field3.innerHTML === "X") ||
        (field4.innerHTML === "X" && field5.innerHTML === "X" && field6.innerHTML === "X") ||
        (field7.innerHTML === "X" && field8.innerHTML === "X" && field9.innerHTML === "X") ||
        (field1.innerHTML === "X" && field4.innerHTML === "X" && field7.innerHTML === "X") ||
        (field2.innerHTML === "X" && field5.innerHTML === "X" && field8.innerHTML === "X") ||
        (field3.innerHTML === "X" && field6.innerHTML === "X" && field9.innerHTML === "X") ||
        (field1.innerHTML === "X" && field5.innerHTML === "X" && field9.innerHTML === "X") ||
        (field7.innerHTML === "X" && field5.innerHTML === "X" && field3.innerHTML === "X") ||

        (field1.innerHTML === "O" && field2.innerHTML === "O" && field3.innerHTML === "O") ||
        (field4.innerHTML === "O" && field5.innerHTML === "O" && field6.innerHTML === "O") ||
        (field7.innerHTML === "O" && field8.innerHTML === "O" && field39innerHTML === "O") ||
        (field1.innerHTML === "O" && field4.innerHTML === "O" && field7.innerHTML === "O") ||
        (field2.innerHTML === "O" && field5.innerHTML === "O" && field8.innerHTML === "O") ||
        (field3.innerHTML === "O" && field6.innerHTML === "O" && field9.innerHTML === "O") ||
        (field1.innerHTML === "O" && field5.innerHTML === "O" && field9.innerHTML === "O") ||
        (field7.innerHTML === "O" && field5.innerHTML === "O" && field3.innerHTML === "O")
        ){
            return true
        }
        return false
};



fieldArr.forEach(function(elem) {
    if(isRunning){
        elem.addEventListener("click", function() {
            if(elem.innerHTML.length == 0 && isRunning){
                elem.innerHTML = val

                if (checkIfFull()){
                    wonText.innerHTML = "Draw"
                    isRunning = false
                    resetGame()
                }

                if(checkWin()){
                    wonText.innerHTML = val + " Won!"
                    isRunning = false
                    resetGame()
                }

                if (val === 'X'){
                    val = 'O'
                } else {
                    val = 'X'
                }
                
            } 
    });
    }

     
});
