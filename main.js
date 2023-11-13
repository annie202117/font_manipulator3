

  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    textSize(difference);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('Bianca', 50, 50);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

