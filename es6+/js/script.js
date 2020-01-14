'use strict'

const data = document.querySelector('.get-data');
const elements = document.querySelectorAll('.field-item');

let currentData;
let firstData;
let secondData;
let operator;
let result;

const getElement = element => {
    element.addEventListener('click', function() {
        data.value += this.innerHTML;
        currentData = data.value;

        switch(this.innerHTML) {
            case '+':
                firstData = +currentData.slice(0, -1);
                data.value = '';
                operator = '+';
                break;
            case '-':
                firstData = +currentData.slice(0, -1);
                data.value = '';
                operator = '-';
                break;
            case '%':
                firstData = +currentData.slice(0, -1);
                data.value = '';
                operator = '/';
                break;
            case 'X':
                firstData = +currentData.slice(0, -1);
                data.value = '';
                operator = '*';
                break;
            case 'AC':
                return data.value = '';
                break;
            case '=':
                secondData = +currentData.slice(0, -1);
                return data.value = getResult(operator);
                break;
        }
    })
};

const getResult = (operator) => {
    switch(operator) {
        case '+':
            return result = firstData + secondData;
        case '-':
            return result = firstData - secondData;
        case '/':
            return result = firstData / secondData;
        case '*':
            return result = firstData * secondData;
    }
};

elements.forEach(getElement);


