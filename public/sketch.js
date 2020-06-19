let cards = [];

// images
let num_players = 7; 
let cardImgs = [];

function preload() {

    // load all the images
    for (let i = 0; i < num_players; i++) {
        cardImgs[i] = loadImage('assets/img/card' + Number(i + 1) + '.png');
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight).parent('canvasHolder');

    // append new card instances from the card object to the array
    // and draw the images on the canvas
    for (let i = 0; i < num_players; i++) {
        const w = 150,
              h = 240;
        
        // draw each card next to each other
        cards[i] = new Cards((i + 1) * w, height / 2, w, h, cardImgs[i]);
    }
}

function displayCards() {

    // loop through the length of cards array
    for (let i = 0; i < cards.length; i++) {

        // show all of the images
        cards[i].show();

        // check if one of them is hovered on
        if (cards[i].mouseOn()) {
            console.log(i);
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
            // console.log(i);
        }
    }
}
