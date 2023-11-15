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

let num1 = 0;
let num2 = 0;
let operator = "";

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

let buttons = [];
let displayValue = "";
let display = document.querySelector("#display");

// Нэг бүрчлэн button элементийг дуудалгүйгээр loop хийж 1-9 хүртэлх id-тай button-уудыг дуудан buttons нэртэй Nodelist үүсгэсэн.
for (let i = 0; i <= 9; i ++) {
    buttons[i] = document.querySelectorAll(`#btn-${i}`);
};

// Дуудсан button элементүүд дээрээ event listener нэмэн, displayValue дотор 1-9 хүртэлх тоог store хийсэн.
for (let i = 0; i <= 9; i ++) {
    buttons[i][0].addEventListener("click", () => {
        displayValue += i.toString();
        display.textContent = displayValue;
    });
};

// Setting num1 value and operator when arithmetic operators button clicked
let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", () => {
    num1 = Number(displayValue)
    displayValue = ""
    operator = "+"
    console.log(operator)
});

let btnSubtract = document.querySelector("#btn-subtract");
btnSubtract.addEventListener("click", () => {
    num1 = Number(displayValue)
    displayValue = ""
    operator = "-"
    console.log(operator)
});

let btnMultiply = document.querySelector("#btn-multiply");
btnMultiply.addEventListener("click", () => {
    num1 = Number(displayValue)
    displayValue = ""
    operator = "*"
    console.log(operator)
});

let btnDivide = document.querySelector("#btn-divide");
btnDivide.addEventListener("click", () => {
    num1 = Number(displayValue)
    displayValue = ""
    operator = "/"
    console.log(operator)
});

// Setting num2 value when = operator clicked, then execute operate function
let btnEquals = document.querySelector("#btn-equals");
btnEquals.addEventListener("click", () => {
    num2 = Number(displayValue)
    display.textContent = operate(num1, num2, operator)
    displayValue = display.textContent
})

let btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    display.textContent = "0";
    displayValue = 0;
})
