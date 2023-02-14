leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

scorerightWrist=0;
scoreleftWrist=0;

song="";
song2="";

function setup(){
    canvas=createCanvas(350,350)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,350,350);
}

function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function modelLoaded(){
    console.log("poseNet se está inicializando");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log("scorerightWrist="+scorerightWrist+"scoreleftWrist="+scoreleftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rigthWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}