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
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    rotate(deg) {
        this.ctx.save();
        this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        console.log('rotate')
        this.ctx.rotate(Math.PI / 180 * deg)
        this.ctx.translate(-(this.x + this.w / 2),  -(this.y + this.h / 2)); // 坐标原点还原

    }

    translate(x, y) {
        this.ctx.save();
        this.ctx.translate(x, y);
    }
}
function moveRect(x, y) {
    ctx.draw(x, y, this.w, this.h)
}