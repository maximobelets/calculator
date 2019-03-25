const data = document.querySelector('.get-data');
const elements = document.querySelectorAll('.field-item');

for(i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        data.value += this.innerHTML;
        if (this.innerHTML === 'AC') {
            data.value = '';
        }
    })
};

