
const playerOne = {
    name: null,
    color: 'Pink',
    number: 1
}

const playerTwo = {
    name: null,
    color: 'Orange',
    number: 2
}


let whoseTurn;

let winner;

// parts of the DOM we will be constantly updating - like nameEls
// const gridEl = document.querySelector('.grid');
// const cellEls = gridEl.querySelectorAll('div');

let gridEl = document.querySelector('.grid');

// this makes the two dimensional array that is the grid
gridEl = new Array(6).fill(0).map(() => new Array(7).fill(0));



// this accesses the value of each grid individually (loop)
// they are all a default value of 0 - this is good

const cellEls = gridEl.forEach((cellEl, i) => {
    console.log(`current index: ${i}, ${cellEl}`);
});

// These are each column slot
let slotOneEl = gridEl[0];
let slotTwoEl = gridEl[1];
let slotThreeEl = gridEl[2];
let slotFourEl = gridEl[3];
let slotFiveEl = gridEl[4];
let slotSixEl = gridEl[5];


const playerOneNameEl = document.getElementById('player-one-name'); // value?
const playerTwoNameEl = document.getElementById('player-two-name'); // value?


// replace the value of a single 'cellEl
slotOneEl[0] = 1;


document.querySelector('#player-one-button').addEventListener('click', (e) => {
    render();
})

document.querySelector('#player-two-button').addEventListener('click', (e) => {
    render();
})

// need an event listener on the columns in grid (the arrays that each array 0-5 holds)
// document.querySelectorAll('')


// tableDataEls.forEach(tableDataEl => {
//     tableDataEl.addEventListener('click', e => {
//         console.log(`td event listener is working.`)
//     })

// })

function init() {
    whoseTurn = Math.floor(Math.random() * 2) + 1;
    winner = null;
    

    render()
}



function render() {
    console.log(`the render function is invoked`);
    // update the value of player one and player two to equal the text inputted
    // to their respective input boxes
    console.log(`It is player ${whoseTurn}'s turn! `)
}



