let a = '';
let b = '';
let op = '';

let current = document.querySelector(`#current`);
let input = document.querySelector(`#input`);

let buttonList = Array.from(document.querySelectorAll("button"));
buttonList.forEach(button => {
    button.addEventListener('click', event => {
        let text = event.target.textContent;
        console.log(text);
        updateInput(text);
    });
});

function updateInput(text) {
    // input += ` ${text}`;
    if (text === 'CLEAR') {
        a = '';
        b = '';
        op = '';
        current.textContent = '';
        input.textContent = '';
    } else if (text === 'DELETE') {
        if (op !== '') {
            b = b.slice(0, -1);
            input.textContent = b;
        } else {
            a = a.slice(0, -1);
            input.textContent = a;
        }
    } else if (text === '.') {
        if (op !== '') {
            b += text;
            input.textContent = b;
        } else {
            a += text;
            input.textContent = a;
        }
    } else if (text === '=') {
        let result = calculate();
        current.textContent = `${a} ${op} ${b} =`;
        a = result;
        input.textContent = result;
    } else if (isNaN(text)) {
        op = text;
        if (b !== '') {
            let result = calculate();
            a = result;
        }
        current.textContent = `${a} ${text}`;
        input.textContent = b;
    } else {
        if (op !== '') {
            b += text;
            input.textContent = b;
        } else {
            a += text;
            input.textContent = a;
        }
    }
}

function calculate() {
    switch (op) {
        case ("+"):
            return add(a, b);
        case ("-"):
            return subtract(a, b);
        case ("x"):
            return multiply(a, b);
        case ("/"):
            return divide(a, b);
    }
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(string) {
    let arr = string.split('');
    switch (arr[1]) {
        case '+':
            return add(arr[0], arr[2]);
        case '-':
            return subtract(arr[0], arr[2]);
        case '*':
            return multiply(arr[0], arr[2]);
        case '/':
            return divide(arr[0], arr[2]);
    }
}