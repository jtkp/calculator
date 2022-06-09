let a = '';
let b = '';
let op = '';

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
        input.textContent = '';
    } else if (text === 'DELETE') {
        if (op !== '') {
            b.slice(0, -1);
        } else {
            a.slice(0, -1);
        }
        input.textContent = input.textContent.slice(0, -1);

    } else if (text === '=') {

    } else if (text === '.') {

    } else if (isNaN(text)) {
        op = text;
        input.textContent += ` ${text}`;
    } else {
        if (op !== '') {
            b += text;
        } else {
            a += text;
        }
        input.textContent += `${text}`;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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