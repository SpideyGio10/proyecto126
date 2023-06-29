leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

scoreleftWrist=0;
scorerightWrist=0;

song="";
song2="";
song_status="";
song2_status="";

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
    fill("#FF0000");
    stroke("#000000");
    song_status=song.isPlaying();
    song2_status=song2.isPlaying();

    if(scorerightWrist>0.2){
        circle(rightWristX,rightWristY,20);
        song2.stop();
        if(song_status==false){
            song.play();
            document.getElementById("song").innerHTML="Reproduciendo:canción de Harry Potter";
        }
    }

    if(scoreleftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song.stop();
        if(song2_status==false){
            song2.play();
            document.getElementById("song").innerHTML="Reproduciendo:Canción de Peter Pan";
        }
    }
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

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}