//Create variables here
var dog ,happyDog
var database,foods
var foodStock,

function preload()
{
  //load images here
  this.image = loadImage("happydog.png");
  this.image = loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog= createSprite()
  dog.addImage("Dog",DogImage);

  foodStock=database.ref('food')
  foodStock.on("value,readStock")

  if(keyWentDown(Up_Arrow)){
    writeStock(foodS)
    Dog.addImage("happydog")


    function readStock(data){
      foodS-data.val();

    }

    function writeStock(x) {
      database.ref('/').update({
        food:x
    })
  }
  
}


function draw() {  

  drawSprites();
  //add styles here

}}



