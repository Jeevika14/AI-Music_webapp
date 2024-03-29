song1="";
song2="";

rightWristX= 0;
rightWristY= 0;

lefttWristX= 0;
lefttWristY= 0;

function setup()
{
    canvas= createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on( 'pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 500);

}

function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}

function modelLoaded()
{
    console.log('PoseNet model is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
  
        scoreRightWrist= results[0].pose.keypoints[10].score;      
        scoreleftWrist= results[0].pose.keypoints[9].score; 
        console.log("scoreLeftWrist= "  +  scoreLeftWrist  + "scoreRightWrist= "  +  scoreRightWrist);
      
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("leftWristX= "  +  leftWristX  + "leftWristY= "  +  leftWristY);
        
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX= "  +  rightWristX  + "rightWristY= "  +  rightWristY);
    }
}
