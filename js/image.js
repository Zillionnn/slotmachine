class Cimage {
    constructor(ctx, src, x, y, w, h) {
        this.ctx = ctx;
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = new Image()
    }
    draw() {
        this.image.src = this.src
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}