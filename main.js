
    var Msound1 = "";
    var Msound2 = "";

    var leftsoundhandy = 0;
    var leftsoundhandx = 0;

    var rightsoundhandy = 0;
    var rightsoundhandx = 0;

function preload(){

    Msound1 = loadSound("mysong.mp3");
    Msound2 = loadSound("mysong2.mp3");

}

function playSound(){

    Msound1 = loadSound("mysong.mp3");
    Msound2 = loadSound("mysong2.mp3");

}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.hide();

    MyModel = ml5.poseNet(camera,modelLoaded);

    MyModel.on('pose', gotposes);
    
}

function modelLoaded(){
    console.log("Posenet works now");
    
}

function gotposes(results){
    if(results.length > 0){
        
        console.log(results);
    
        leftsoundhandy = results[0].pose.rightWrist.y;
        leftsoundhandx = results[0].pose.rightWrist.x;

        rightsoundhandy = results[0].pose.rightWrist.y;
        rightsoundhandx = results[0].pose.rightWrist.x;

        console.log("left hand x is " + leftsoundhandx + " left handy is " + leftsoundhandy);
        console.log("right hand x is " + rightsoundhandx + " right handy is " + rightsoundhandy);

    }
}

function draw(){

    image(camera,0,0,500,500);

}