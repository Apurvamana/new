var roadImg , road

function preload(){
roadImg=loadImage("road.png")

}

function setup() {
    createCanvas(600,600);

     road = createSprite(300,300);
     road.addImage("road",roadImg);
     road.velocityY = 1;
}

function draw() {
    background(255);
    if(road.y >400 ){
         road.y = 300
       } 
     
}