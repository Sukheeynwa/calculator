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

let number = 0;
let operator = "+";
let sum = 0;

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
let sumDisplay = document.querySelector("#sum-display");
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
        number = Number(displayValue);
    });
};

// Setting num1 value and operator when arithmetic operators button clicked
let btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", () => {
    sum = operate(sum, number, operator)

    display.textContent = sum;
    displayValue = ""
    operator = "+"
    sumDisplay.textContent = sum + operator;
});

let btnSubtract = document.querySelector("#btn-subtract");
btnSubtract.addEventListener("click", () => {
    sum = operate(sum, number, operator)

    display.textContent = sum;
    displayValue = ""
    operator = "-"
    sumDisplay.textContent = sum + operator;
});

let btnMultiply = document.querySelector("#btn-multiply");
btnMultiply.addEventListener("click", () => {
    sum = operate(sum, number, operator)

    display.textContent = sum;
    displayValue = ""
    operator = "*"
    sumDisplay.textContent = sum + operator;
});

let btnDivide = document.querySelector("#btn-divide");
btnDivide.addEventListener("click", () => {
    sum = operate(sum, number, operator)

    display.textContent = sum;
    displayValue = ""
    operator = "/"
    sumDisplay.textContent = sum + operator;
});

let btnNotation = document.querySelector("#btn-notation");
btnNotation.addEventListener("click", () => {
    displayValue += "."
    sumDisplay.textContent += "."
})

// Setting num2 value when = operator clicked, then execute operate function
let btnEquals = document.querySelector("#btn-equals");
btnEquals.addEventListener("click", () => {
    number = Number(displayValue);
    sum = operate(sum, number, operator)


    display.textContent = sum;
    sumDisplay.textContent = sum;
    number = 0;
});


let btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
    sumDisplay.textContent = "0";
    display.textContent = "0";
    displayValue = ""

    number = 0;
    sum = 0;
});
