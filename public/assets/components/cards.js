class Cards {
    constructor(x, y, w, h, img, back_img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.back_img = back_img;
        this.clicked = false;
    }

    show(clicked, hovered) {

        push();

            imageMode(CENTER);

            translate(this.x, this.y);

            // check if a card is chosen
            if (this.clicked != clicked) {

                // only re-assign the variable if the boolean variable is true
                if (clicked && !cardRevealed) {
                    this.clicked = clicked;
                }

                // draw cards at normal sizes
                image(this.img, 0, 0, this.w, this.h);

            // otherwise
            } else {

                // check if a card is not hovered
                if (!hovered) {
                
                    // draw the back of the cards at normal sizes
                    image(this.back_img, 0, 0, this.w, this.h);

                // otherwise
                } else {     
                    push();

                        // if a player has not chosen a card
                        if (!cardRevealed)

                            // scale the hovered card
                            scale(1.1, 1.1);

                        // draw the back of the cards
                        image(this.back_img, 0, 0, this.w, this.h);
                    pop();
                }
            }

        pop();
    }

    mouseOn() {
        if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
            if (mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
                return true;
            }
        } return false;
    }
}