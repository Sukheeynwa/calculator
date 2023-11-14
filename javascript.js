function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let num1 = 2;
let num2 = 5;
let operator = "*";

function operate(a, b, op) {
    if (op === "+") {
        return add(a, b)
    } else if (op === "-") {
        return subtract(a, b)
    } else if (op === "*") {
        return multiply(a, b)
    } else if (op === "/") {
        return divide(a, b)
    };
};

/* let zero = document.querySelector("#btn-0");
let one = document.querySelector("#btn-1");
let two = document.querySelector("#btn-2");
let three = document.querySelector("#btn-3");
let four = document.querySelector("#btn-4");
let five = document.querySelector("#btn-5");
let six = document.querySelector("#btn-6");
let seven = document.querySelector("#btn-7");
let eight = document.querySelector("#btn-8");
let nine = document.querySelector("#btn-9");

console.log(display.textContent);

zero.addEventListener("click", () => {
    display.textContent = 0;
    num1 = 0;
}); */

let buttons = [];
let displayValue = 0;
let display = document.querySelector("#display");


for (let i = 0; i <= 9; i ++) {
    buttons[i] = document.querySelectorAll(`#btn-${i}`);
};

for (let i = 0; i <= 9; i ++) {
    buttons[i][0].addEventListener("click", () => {
        display.textContent += i;
        displayValue = display.textContent
        console.log(Number(displayValue))
    });
};


let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", () => {
    display.textContent = "";
    num1 = Number(displayValue)
    operator = "+"
    console.log(operator)
});

let btnSubtract = document.querySelector("#btn-subtract");
btnSubtract.addEventListener("click", () => {
    display.textContent = "";
    num1 = Number(displayValue)
    operator = "-"
    console.log(operator)
});

let btnMultiply = document.querySelector("#btn-multiply");
btnMultiply.addEventListener("click", () => {
    display.textContent = "";
    num1 = Number(displayValue)
    operator = "*"
    console.log(operator)
});

let btnDivide = document.querySelector("#btn-divide");
btnDivide.addEventListener("click", () => {
    display.textContent = "";
    num1 = Number(displayValue)
    operator = "/"
    console.log(operator)
});

let btnEquals = document.querySelector("#btn-equals");
btnEquals.addEventListener("click", () => {
    num2 = 0;
    num2 = Number(displayValue)
    console.log(`num1: ${num1}`)
    console.log(`num2: ${num2}`)
    console.log(operate(num1, num2, operator))
    display.textContent = operate(num1, num2, operator)
    displayValue = display.textContent
})

let btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = ""
})
