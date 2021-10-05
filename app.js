const board = document.querySelector('#board');
const SQUARES_NUMBER = 1110;
const colors = ['#708090', '#2F4F4F', '#696969', '#D3D3D3', '#000080', '#006400']

for (let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div');
square.classList.add('square')

square.addEventListener('mouseover', ()=> 
setColor(square))

square.addEventListener('mouseleave', ()=> 
removeColor(square))

board.append(square);
}

function setColor (element) {
const color = getRandomColor ();
element.style.backgroundColor = color;
element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
element.style.backgroundColor = '#1d1d1d'
element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor () {
return colors[Math.floor(Math.random() * colors.length)]
}