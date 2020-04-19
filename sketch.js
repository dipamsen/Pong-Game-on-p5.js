
//Playable Character
var playerPaddle;
//Non-playable Characters
var computerPaddle;
var ball;

var gameState = "menu";
var score;
var lives;
var wins;
var final, high;

function setup() {
    createCanvas(400,400);
    playerPaddle = new Paddle(width-15, height/2, 10, 70);
    computerPaddle = new Paddle(15, height/2, 10, 70);
    ball = new Ball(width/2, height/2, 15, 15);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    high = 0;
    textFont('COMIC SANS MS');
    textStyle(BOLD);
}

function draw() {
    background(0);
    playerPaddle.display();
    computerPaddle.display();
    if(gameState == "menu"){
        ball.reset();
        ball.xSpeed = 3;
        ball.ySpeed = 3;
        playerPaddle.reset/*position*/();
        computerPaddle.reset();
        text("SPACE to PLAY", width/2, 80);
        ball.display/*//show//*/();
        computerPaddle.dir = ball.yDir;

        text("TIMER: "+score, width*5/6, height*1/12);
        text("WINS: "+wins, width*1/7, height*1/12);
        wins = 0;
        score = 0;
    }
    if(gameState == "play"){
        //skill factor
        playerPaddle.y = mouseY;
        //computerPaddle.y = ball.y;
        computerPaddle.speed = ball.ySpeed;
        computerPaddle.move();
        computerPaddle.bounceOffEdges("Top and Bottom");
        text("Move using your mouse", width/2, 80);
        ball.move();
        if(ball.isOut(LEFT)){
            gameState = "end";
        }
        if(ball.isOut(RIGHT)){
            wins++;
            ball.reset();
            computerPaddle.reset();
        computerPaddle.dir = ball.yDir;

        }
        //GAME ADAPTIVITY
        ball.xSpeed = 4+(Math.floor(score/10))/2;
        ball.ySpeed = ball.xSpeed;
        text("TIMER: "+score, width*5/6, height*1/12);
        text("WINS: "+wins, width*1/7, height*1/12);

        if(frameCount%30==0){
            //Why 30?
            score++;
        }
    ball.display();

    }
    // Random fun fact about this game:
    // --> The computer paddle doesn't move using the ball's y position.
    if(gameState == "end"){
        final = score+(wins*10);
        if(high<final){
            high = final;
        }
        text("Press ENTER to Restart", width/2, height/2);
        text("Final Score: "+final, width/2, height/3);
        text("High Score: "+high, width/2, height*2/3);
    }
    if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle)){
        ball.xDir = -1*ball.xDir;
    }
    if(ball.bounces(TOP) || ball.bounces(BOTTOM)){
        ball.yDir = -1*ball.yDir;
    }
    stroke("white");
    for (var i = 0.25; i<20; i++){
        line(width/2, i*20, width/2, i*20+10);
    }
    //console.log(frameRate());
    //HELLO FROM THE PROGRAMMER TO THE READER
    //JUST FOR FUN
}

function keyPressed(){
    if(keyCode == 32){
        if (gameState == "menu"){ //I know that && (AND) operator was a better option here.
            gameState = "play";
        }
    }
    if(keyCode == ENTER && gameState == "end"){
        gameState = "menu";
    }
}
