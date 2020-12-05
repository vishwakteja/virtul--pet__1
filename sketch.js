//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImage, dogImage2, food=20;

function preload(){
  dogImage=loadImage("dog.png")
  dogImage2=loadImage("happydog.png")
}

function setup() {

  createCanvas(500, 500);
  
  //foodStock=database.ref("food");
  //foodStock.on("value", readStock);

  dog=createSprite(250, 250, 40, 40);
   dog.addImage("dog", dogImage);
   dog.scale=0.15;
   
  
}


function draw() {  
 background(46, 139, 87)
 stroke("white")
 textSize(20)
 fill("white")
 text("NOTE : press UP_ARROW key to feed drago milk", 30, 20)

 stroke("white")
 textSize(20)
 fill("white")
 text("food remaining :"+ food, 30, 180)
 

 if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("dog", dogImage2)
food=food-1


 }
 drawSprites();
  //add styles here

}

function readStock(data){

  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
   x=0
  }else{
   x=x-1
  }



 // database.ref('/').update({
  //food:x
//})

}

