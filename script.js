let color = 'black';
let click = true;

function populateBoard(size){
    const board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div)=> div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        const square  = document.createElement('div');
        square.addEventListener('mouseover',colorSquare );
        board.insertAdjacentElement('beforeend',square);

    }
}
populateBoard(16);// auto board size 

const setSize = document.querySelector('.setSize');
const sizeOfboard = document.querySelector('#sizeOfboard');
const errorMessage = document.querySelector('.errorMessage');
setSize.addEventListener('click',changeSize(sizeOfboard.value));

//board size 
function changeSize(input){
    if(input >= 2 && input <= 100){
        populateBoard(input);
    }else{
        //errrr message
        errorMessage.style.display = 'block';
    }
}

function colorSquare(){
  this.style.backgroundColor = color;
}
// color changing 
function changeColor(input){
    if(click){
        color = input;
       
    }
}

let RandomColor = ['green','pink','blue','red','yellow','lightblue','grey','orange','purple','brown'];

// random color 
function changeRandom(){
    if(click){
        const rColor = Math.floor(Math.random()* RandomColor.length );
        color = RandomColor[rColor];
    }

}

// reset btn 
function Reset(){
    const board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div)=> div.style.backgroundColor = 'white');
    errorMessage.style.display = 'none';
    sizeOfboard.value = 16;
}

// click or not 
document.querySelector('body').addEventListener('click',(e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = 'Mode : Coloring';
        }else{
            document.querySelector('.mode').textContent = 'Mode : Not Coloring';
        }
    }
})