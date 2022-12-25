//user enters two sizes
//create shape using those measurements
//add to screen
let container = document.querySelector('.container');
let length = document.querySelector('.length');
let height = document.querySelector('.height');
let button = document.querySelector('.button');

button.addEventListener('click', shape);

function shape(){

    let newShape = document.createElement('div');
    let one = newShape.style.width=`${length.value}px`;
    let two = newShape.style.height=`${height.value}px`;
    newShape.style.border="1px solid blue";
    newShape.classList.add('move')
    container.appendChild(newShape);
}
