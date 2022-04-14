video = "";
dstatus = "";
objects = [];
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();

    
    video = createCapture(VIDEO);
    video.hide();

    
    posenet = ml5.poseNet(video , modaloaded)
    posenet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length>0){
        console.log("results");
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX" + leftWristX + "leftWirstY"+ leftWristY);
     
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y; 
      console.log("rightWristX"+ rightWristX + "rightWristY"+ rightWristY);
    }
}



function draw() {
    image(video, 0, 0, 480, 380);
    fill("cyan");
    stroke("green");

        circle(rightWristX, rightWristY, 20);
        
  
    circle(leftWristX, leftWristY, 20);
   
}




function modaloaded() {
    console.log("Modal Loaded");
}


function gotresult (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
} 

