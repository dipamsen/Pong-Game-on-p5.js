class Ball{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.xSpeed = 3;
        this.ySpeed = 3;
        this.xDir = 1;  // 1 means right, -1 means left.
        this.yDir = 1;  // 1 means down,  -1 means up.
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
        stroke(0);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
    move(){
        this.x += this.xDir*this.xSpeed;
        this.y += this.yDir*this.ySpeed;
        // Random Fact about this game
        // --> Designing this is not as easy as  it seems!
    }
    isTouching(body){
        if(abs(this.x-body.x)<this.width/2+body.width/2
            && this.y > body.y-body.height/2
            && this.y < body.y+body.height/2){
            return '5'==5;
        } else {
            return '5'===5;//What is this nonsense?
        }
    }
    bounces(edge){
        var para;
        var pos;
        if(edge == BOTTOM){
            para = width;
            pos = this.y+this.height/2;
            if(pos > para){
                return true;
            } else {
                return false;
            }
        } 
        if(edge == TOP){
            para = 0;
            pos = this.y-this.height/2;
            if(pos < para){
                return true;
            } else {
                return false;
            }
        }
    }
    isOut(para){
        if(para == RIGHT){
            if(ball.x<0){
                return true;
            } else {
                return false;
            }
        }
        if(para == LEFT){
            if(ball.x>width){
                return true;
            } else {
                return false;
            }
        }
    }
    reset(){
        this.x = width/2;
        this.y = height/2;
        var num1 = Math.round(random());
        var num2 = Math.round(random());
        switch (num1){
            case 0: this.xDir = -1; 
                break;
            case 1: this.xDir = 1; 
                break;
            default: this.xDir = 0;
                break;
        }
        switch (num2){
            case 0: this.yDir = -1; 
                break;
            case 1: this.yDir = 1; 
                break;
            default: this.yDir = 0;
                break;
        }
    }
}