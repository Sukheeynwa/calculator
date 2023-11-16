function operate(a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "*") {
        return a * b;
    } else if (op === "/") {
        return a / b;
    }
};

const btnDigit = document.querySelectorAll("#btn-digit");
console.log(btnDigit);
const btnOp = document.querySelectorAll("#btn-op");
console.log(btnOp);
const currentScreen = document.querySelector("#current-screen");
const  resultScreen = document.querySelector("#result-screen");
const btnDot = document.querySelector("#btn-dot");
const btnEquals = document.querySelector("#btn-equals");

let result = 0;
let value = "";
let operator = "+";

btnDigit.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(operator === "") {
            value = btn.textContent;
            result = 0;
            operator = "+"
            currentScreen.textContent = value;
            resultScreen.textContent = result;
        } else {
            value += btn.textContent;
            currentScreen.textContent = value;
        }
    })
});

btnOp.forEach((btn) => {
    btn.addEventListener("click", () => {
        operator = btn.textContent;

        result = operate(result, Number(value), operator);
        resultScreen.textContent = result + operator;
        currentScreen.textContent = result;
        value = "";
    })
});

btnEquals.addEventListener("click", () => {
    result = operate(result, Number(value), operator);
    value = "";

    resultScreen.textContent = result;
    currentScreen.textContent = result;
    operator = "";
});


// Pseudocode

// Operate function aa hiine
// Result, value gesen variable zarlana
// Button daragdah uyd button-s 0-9 hurtelh value awna
    // Olon orontoi toog awdag baih yostoi
// Operator button deer darah bolgond operator songogdood operate function ajillaj, operate function-s garsan valueg resulttai tentsuulne 

// result = 0;
// operator = "+"
// Btn click => value set
// 4 clicked => value = 4
// "-" btn click => result = result + value, operator = "-"
// "-" btn click => result = 0 + 4, operator = "-"

