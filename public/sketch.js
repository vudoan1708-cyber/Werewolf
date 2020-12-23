// objects / classes
let cards = [];

// images
let num_players = 8; // hard coded for now, this will be decided by the host before a gameplay
let cardImgs = [],
    back_cardImgs = [];

// socket.io
let socket;

// game modes
let mode = 1;

let cardRevealed = false;

async function getSocket() {
    const response = await fetch('/socket/');
    const host = await response.json();
    socket = io.connect('http://' + host);
    socket.on('mouse', movingCards);
    socket.on('shuffle', shuffleCards);
}

function movingCards(data) {
    console.log(data)
    // if the y coordinate of a card is still less than height / 4
    // keep moving it
    // if (cards[data.index].move()) {
        
    //     cards[data.index].show(true, false);

    //     // and loop this function till the condition is no longer satisfied
    //     setTimeout(() => {
    //         movingCards(data);
    //     }, 20);
    // }
}

function preload() {

    // load all the images
    for (let i = num_players - 1; i >= 0; i--) {

        // load the front part of each card
        cardImgs[i] = loadImage('assets/img/card' + Number(i + 1) + '.png');

        // load the back part of each card, one image num_players times
        back_cardImgs[i] = loadImage('assets/img/back_card.png');
    }
}

function shuffleCards() {
    cardImgs.sort(() => Math.random() - 0.5);
}

async function setup() {
    createCanvas(window.innerWidth, window.innerHeight).parent('canvasHolder');

    // fetch an endpoint to get the environment port
    await getSocket();

    // shuffle the cards position
    // shuffleCards();

    // append new card instances from the card object to the array
    // and draw the images on the canvas
    for (let i = 0; i < num_players; i++) {
        const w = 150,
              h = 240;
        let x = (i + i / 5 + 0.95) * w,
            y = height / 2;
        
        // draw each card next to each other
        cards[i] = new Cards(x, y, w, h, cardImgs[i], back_cardImgs[i]);
    }

    imageMode(CENTER);
}

function displayCards() {

    // loop through the length of cards array
    for (let i = 0; i < cards.length; i++) {

        // check if one of them is hovered on
        if (cards[i].mouseOn()) {
            
            // show all of the cards
            // enlarge the hovered card
            cards[i].show(false, true);

        // otherwise
        } else {

            // show all of the cards
            // initially the back sides
            cards[i].show(false, false);
        }
    }
}

// welcome screen
function welcomeScreen() {
    push();
        
    pop()
}

function draw() {
    background(100);

    if (mode == 0) {
        welcomeScreen();
    } else displayCards();
}

function mousePressed() {
    let index;

    // loop through the length of cards array
    for (let i = 0; i < cards.length; i++) {

        // check if one of them is clicked
        if (cards[i].mouseOn()) {
            
            if (!cardRevealed) {

                // reveal the card and not enlarge it
                cards[i].show(true, false);

                // pass it to a local variable
                index = i;

                // switch on a global variable to prevent players
                // from choosing many cards
                cardRevealed = true;

                // create a data object
                let data = {
                    index
                };

                // emit to the server side
                socket.emit('mouse', data);
            }
        }
    }
}