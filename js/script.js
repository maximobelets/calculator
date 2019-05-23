'use strict'

const data = document.querySelector('.get-data');
const elements = document.querySelectorAll('.field-item');


const getElement = element => {
    element.addEventListener('click', function() {
        data.value += this.innerHTML;
    })
};

elements.forEach(getElement);





