class Paddle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.normal = {
            x: x,
            y: y
        }
        this.speed = 0;
        this.dir = 1;
        //this.x and this.normal.x should be the same, shouldn't they?
        //We passed the same argument in them!
        //But actually they aren't.
    }
    display(){
        var pos = {
            x: this.x, 
            y: this.y
        }
        var angle = this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER, CENTER);
        noStroke();
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
    move(){
        this.y += this.speed*this.dir;
    }
    reset(){
        this.x = this.normal.x;
        this.y = this.normal.y;
    }
    bounceOffEdges(uselessArgument){
        if(this.y-7<0 || this.y+7>height){
            this.dir = -1*this.dir;
        }
    }
}