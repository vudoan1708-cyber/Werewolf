class Cards {
    constructor(x, y, w, h, img, back_img) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.back_img = back_img;
        this.revealed = false;
    }

    show(bool) {
        if (this.revealed != bool) {
            if (bool) this.revealed = bool;
            image(this.img, this.x, this.y, this.w, this.h);
            // console.log(this.revealed)
        } else {
            image(this.back_img, this.x, this.y, this.w, this.h);
        }
    }

    mouseOn() {
        if (mouseX > this.x && mouseX < this.x + this.w) {
            if (mouseY > this.y && mouseY < this.y + this.h) {
                return true;
            }
        } return false;
    }
}