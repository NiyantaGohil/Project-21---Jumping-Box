var canvas;
var music;
var block1, block2, block3, block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite (0, 580, 220, 30);
    block1.shapeColor = rgb(0, 0, 255);

    block2 = createSprite (295, 580, 365, 30);
    block2.shapeColor = rgb(0, 255, 0);

    block3 = createSprite (515, 580, 200, 30);
    block3.shapeColor = rgb(255, 0, 0);

    block4 = createSprite (700, 580, 365, 30);
    block4.shapeColor = rgb(110, 250, 215);

    ball = createSprite(random(20, 750), 100, 50, 50);
    ball.shapeColor = rgb(255, 255, 255);
    ball.velocityX = 8;
    ball.velocityY = 8;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);

if(block1.isTouching(ball)&& ball.bounceOff(block1)){
ball.shapeColor = rgb(0, 0, 255);
music.play();
}
if(block2.isTouching(ball)){
    ball.shapeColor = rgb(0, 255, 0);
    music.stop();
    ball.velocityX = 0;
    ball.velocityY = 0;
    }
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = rgb(255, 0, 0);
       
        }
        if(block4.isTouching(ball)&& ball.bounceOff(block4)){
            ball.shapeColor = rgb(110, 250, 215);
            
            }
drawSprites();


    //add condition to check if box touching surface and make it box
}
