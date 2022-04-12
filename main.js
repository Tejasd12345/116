nosex = 0;
nosey = 0;
function preload()
{
  img=loadImage("https://i.postimg.cc/XNwLvPTf/clown-removebg-preview.png");
}

function setup() {
canvas= createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelLoaded)
posenet.on('pose', gotposes);
}
function draw(){
image(video,0,0,300,300);
image(img,nosex,nosey,25,25);
}
function take_snapshot() {
save(tejas.png);
}

function modelLoaded() {
  console.log("posenet model has be loaded");
}

function gotposes(results) 
{
 if (results.length>0) {
     console.log(results);
    nosex=results[0].pose.nose.x-15 ;
    nosey=results[0].pose.nose.y-15;
     console.log("nose x = " + nosex);
     console.log("nose y = " + nosey);
 }   
}