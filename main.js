Status = "";
input = "";

function setup(){
    canvas = createCanvas(400,400);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,400,400);
}