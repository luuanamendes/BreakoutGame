function createBrickRow(y) {
    for (var c = 0; c < 7; c++) {
        var brick = createSprite(85 + 55 * c, y, 50, 25);
        brick.addImage(brickImg);
        bricks.add(brick);
    }
}

function breakBrick(ball, brick) {
    score = score + 15;
    brick.remove();

    if (ball.velocityY < 12 && ball.velocityY > -12) {
        ball.velocityX *= 1.03;
        ball.velocityY *= 1.03;
    }
}

function waitingGame() {
    text("Press SPACE to start.", 190, 230);
    ball.velocityX = 0;
    ball.velocityY = 0;
    ball.x = 250;
    ball.y = 280;
}

function playingGame() {
    paddle.x = World.mouseX;

    if (paddle.x < 60) {
        paddle.x = 60;
    }

    if (paddle.x > 440) {
        paddle.x = 440;
    }

    ball.bounceOff(paddle);
    ball.bounceOff(leftWall);
    ball.bounceOff(rightWall);
    ball.bounceOff(topWall);

    ball.bounceOff(bricks, breakBrick);

    if (!bricks[0]) {
        gamestate = "win";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if (ball.isTouching(bottomWall)) {
        loseLife();
    }
}

function loseLife() {
    life = life - 1;

    if (life >= 1) {
        gamestate = "serve";
    }else {
        gamestate = "end";
    }
}

function gameOver() {
    text("You lose!!!", 220, 230);
    text("Press R to restart the game :)", 170, 270);
    
    if (keyDown("r")) {
        location.reload();
    }
}

function gameWin() {
    text("You win!!!", 220, 200);
    text("Press R to restart the game :)", 170, 270);

    if (keyDown("r")) {
        location.reload();
    }
}

