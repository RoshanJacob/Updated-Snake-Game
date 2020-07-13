let snake;
let food;
let resolution = 20;
let w;
let h;
var score =0;
function setup(){
    canvas = createCanvas(400,400);
    w = floor(width/resolution);
    h = floor(height/resolution);
    frameRate(5);
    snake = new Snake();
    foodLocation();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.setDir(0,-1);
    }else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1);
    }else if(keyCode === RIGHT_ARROW){
        snake.setDir(1,0);
    }else if(keyCode === LEFT_ARROW){
        snake.setDir(-1,0);
    }
}
function foodLocation(){
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x,y);
}
function draw(){
    scale(resolution);
    background(0,250,97);
    if(snake.eat(food)){
        foodLocation();
        score = score + 1;
        print("SCORE" + ":" + score);
    }
    snake.update();
    snake.display();

    if(snake.endGame()){
        noLoop();
        background(255,0,0);
        print("Your score is" + ":" + score );
        print( "Try again!");
    }
    noStroke();
    fill(255,0,0);
    rect(food.x,food.y,1,1);
}