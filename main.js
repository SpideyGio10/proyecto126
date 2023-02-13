function setup(){
    canvas=createCanvas(350,350)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3")
}

function draw(){
    image(0,0,350,350);
}