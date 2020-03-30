function drawRect(ctx, color, x, y, w, h) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

class Rect {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw() {
        this.ctc.fillStyle = this.color
        this.ctx.fillRect(this.x,this.y,this.w, this.h);
    }
    rotate()
    {
        this.ctx.save();
        this.ctx.
    }

    translate(x, y) {
        this.ctx.save();
        this.ctx.translate(x,y);        
    }
}
function moveRect(x, y) {
    ctx.draw(x, y, this.w, this.h)
}