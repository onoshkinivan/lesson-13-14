const container = document.querySelector('#container');
const myButton = document.querySelector('#myButton');

myButton.addEventListener('click', function(){
    container.style.color = 'red';
})

container.addEventListener('click', function(){
    container.style.color = 'green';
    myButton.textContent = 'ОК'
})

const phone = document.querySelector('#phone');

phone.addEventListener('keydown', function(event){
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    console.log(event.key)

    if(event.key >= 0 && event.key <= 9) {
        isDigit = true
    }
    if(event.key == '-') {
        isDash = true;
    }
    if(event.key == 'Backspace' || event.key == 'Arrowleft' || event.key == 'Arrowright') {
        isControl = true;
    }
    if (!isDigit && !isDash && !isControl) {
        event.preventDefault();
    }
})