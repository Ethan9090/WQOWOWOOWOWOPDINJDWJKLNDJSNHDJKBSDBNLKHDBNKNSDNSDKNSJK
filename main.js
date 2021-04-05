
    var Msound1 = "";
    var Msound2 = "";

function preload(){

    Msound1 = loadSound("mysong.mp3");
    Msound2 = loadSound("mysong2.mp3");

}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.hide();

    MyModel = ml5.poseNet(camera,modelLoaded);
    
}

function modelLoaded(){
    console.log("Posenet works now");
}

function draw(){

    image(camera,0,0,500,500);

}