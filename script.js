const yesButt = document.querySelector('.yes-butt');
const noButt = document.querySelector('.no-butt');
const extraText = document.querySelector('.extra-text');
const endSrceen = document.querySelector('.end-srceen');


document.querySelector('input').value = 'Русні п*зда?';



noButt.addEventListener('mouseenter', noButtMove);

let value_y = 0;
let value_x = 0;

let count = 0;

function noButtMove() {
    let newValue_x = randomNum(600, -700);
    let newValue_y = randomNum(0, 300);
        
    if (newValue_y < 15 || newValue_y > 140 && newValue_x > 100 || newValue_x < -100) {
        if (newValue_y > value_y + 100 || newValue_y < value_y - 100 || value_y == 0) value_y = newValue_y;
        if (newValue_x > value_x + 150 || newValue_x < value_x - 150 || value_x == 0) value_x = newValue_x;
    }
    
    if (value_y != newValue_y || value_x != newValue_x) noButtMove();
    else count++;

    noButt.style.top = `${value_y}px`;
    noButt.style.right = `${value_x}px`;


    if (count > 15) {
        extraText.style.color = '#EDF2F4';
    }
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}



yesButt.addEventListener('click', () => {
    console.log(true);
    endSrceen.style.display = 'flex';
});
noButt.addEventListener('click', () => {
    location.reload();
});