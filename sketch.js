var tracksIMG, tracks;
var jakeIMG, jake;
var soundtrack;
var guard, guardIMG;
var coin, coinIMG, coinGroup;

var gameState = "play";


function preload(){
    jakeIMG = loadImage("jake.png");
    tracksIMG = loadImage("FTracks.jpg");
    guardIMG = loadImage("police_new.png");
    soundtrack = loadSound("subway_surfers_ring.mp3");
    coinIMG = loadImage("New_coin1.webp");
}

function setup() {

    createCanvas(600, 700);

    tracks = createSprite(300,290); 
    tracks.addImage(tracksIMG);
    tracks.scale = 1.31;

    jake = createSprite(200,370);
    jake.addImage(jakeIMG); 
    jake.scale = 0.2;
    jake.setCollider("rectangle", 0, 0, 450 ,650,);

    guard = createSprite(200,750);
    guard.velocityY = -0.8;
    guard.addImage(guardIMG);
    guard.scale = 1.3;
    guard.setCollider("rectangle", 250,-50,-50,300);


    coinGroup = new Group;

}

function draw() {
    background(0);   

    if(gameState === "play"){
        
        spawnCoins();

        jake.x = World.mouseX;
        jake.y = World.mouseY;
        guard.x = World.mouseX -295;
    
       
    
    
        tracks.velocityY = 2;
        if(tracks.y>400){
    
            tracks.y = 300;
        }
        
        if(jake.isTouching(coinGroup)){
            guard.y = guard.y + 100;
            coin.destroy();
            
        }
        
    }
        
        if(guard.isTouching(jake)){
            jake.destroy(guard);
            gameState = "end";

    }


    if(gameState === "end"){
        fill("white");
        textSize(50);
        text("GAME OVER", 200,250);
        tracks.velocityY = 0;
        jake.visible = false;
        guard.visible = false;
        coinGroupm.destroy();
        tracks.visible = false;
    }
    drawSprites();



}




function spawnCoins(){


    if(frameCount % 200 === 0 ){
        
        coin = createSprite(Math.round(random(100,500)),-50);
        coin.scale = 0.4;           
        coin.addImage(coinIMG);
        coin.velocityY = 2;
        coinGroup.add(coin);
        var gameState = "end";
    }
  
    

}

