var ball, paddle, topWall, leftWall, rightWall, bottomWall;
var ballImg, paddleImg, brickImg;
var score = 0;
var life = 3;
var bricks;

var gamestate = "serve";

function setup() {
  createCanvas(500, 400);

  topWall = createSprite(250, -5, 520, 10);
  leftWall = createSprite(-5, 200, 10, 420);
  rightWall = createSprite(505, 200, 10, 420);
  bottomWall = createSprite(250, 405, 520, 10);

  ball = createSprite(250, 200, 10, 10);
  ball.addImage(ballImg);

  paddle = createSprite(250, 350, 120, 10);
  paddle.addImage(paddleImg);

  bricks = new Group();

  createBrickRow(65);
  createBrickRow(65 + 30,);
  createBrickRow(65 + 30 + 30,);
  createBrickRow(65 + 30 + 30 + 30);

}

function draw() {
  background("black");

  text("Life: " + life, 190, 30);
  text("|    Score: " + score, 245, 30);

  if (gamestate === "serve" && keyDown("space")) {
    gamestate = "play";
    ball.velocityX = Math.round(random(-10, 10));
    ball.velocityY = Math.round(random(-8, 8));
  }

  if (gamestate == "serve") {
    waitingGame();
  }else if (gamestate == "play") {
    playingGame();

  }else if (gamestate === "win") {
    gameWin();
  }else {
    gameOver();
  }

  drawSprites();
}










