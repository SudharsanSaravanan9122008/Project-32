const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, backgroundImage;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){


    if(backgroundImg){
        background(backgroundImage)
    }
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON)
    // write code slice the datetime
    datetime = responseJSON.datetime;
    console.log(datetime);
    hour = 5
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if(hour <= 06 && hour >= 05){
        backgroundImg = "images/sunrise1.png";
    }else if(hour >= 06 && hour <= 07){
        backgroundImg = "images/sunrise2.png";
    }else if(hour >= 07 && hour <= 10){
        backgroundImg = "images/sunrise3.png";
    }else if(hour >= 10 && hour <= 11){
        backgroundImg = "images/sunrise4.png";
    }else if(hour >= 11 && hour <= 12){
        backgroundImg = "images/sunrise5.png";
    }else if(hour >= 12 && hour <= 13){
        backgroundImg = "images/sunrise6.png";
    }else if(hour >= 13 && hour <= 14){
        backgoundImg = "images/sunset7.png";    
    }else if(hour >= 14 && hour <= 15){
        backgroundImg = "images/sunset8.png";
    }else if(hour >= 15 && hour <= 16){
        backgroundImg = "images/sunset9.png";
    }else if(hour >= 16 && hour <= 18){
        backgroundImg = "images/sunse10.png";
    }else if(hour >= 18 && hour <= 19){
        backgroundImg = "images/sunset11.png";
    }else{
        backgroundImg = "images/sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImage = loadImage(backgroundImg);

}
