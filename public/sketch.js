// objects / classes
let cards = [];

// images
let num_players = 8; // hard coded for now, this will be decided by the host before a gameplay
let cardImgs = [],
    back_cardImgs = [];

// socket.io
let socket;

async function getSocket() {
    const response = await fetch('/socket/');
    const port = await response.json();
    socket = io.connect('http://localhost:' + port);
}

function preload() {

    // load all the images
    for (let i = 0; i < num_players; i++) {

        // load the front part of each card
        cardImgs[i] = loadImage('assets/img/card' + Number(i + 1) + '.png');

        // load the back part of each card, one image num_players times
        back_cardImgs[i] = loadImage('assets/img/back_card.png');
    }
}

async function setup() {
    createCanvas(window.innerWidth, window.innerHeight).parent('canvasHolder');

    // fetch an endpoint to get the environment port
    await getSocket();

    // append new card instances from the card object to the array
    // and draw the images on the canvas
    for (let i = 0; i < num_players; i++) {
        const w = 150,
              h = 240;
        
        // draw each card next to each other
        cards[i] = new Cards((i + 1) * w, height / 2, w, h, cardImgs[i], back_cardImgs[i]);
    }
}

function displayCards() {

    // loop through the length of cards array
    for (let i = 0; i < cards.length; i++) {

        // show all of the images
        // initially the back sides
        cards[i].show(false);

        // check if one of them is hovered on
        if (cards[i].mouseOn()) {
            // console.log(i);
        }
    }
}

function draw() {
    background(100);
    displayCards();
}

function mousePressed() {

    // loop through the length of cards array
    for (let i = 0; i < cards.length; i++) {

        // check if one of them is clicked
        if (cards[i].mouseOn()) {
            console.log(i);

            cards[i].show(true);
        }
    }
}
