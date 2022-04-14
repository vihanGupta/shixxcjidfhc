var img = "";
var status = "";
var object = [];
var objectDetect = "";
function preload()
{
    img = loadImage("apple_orange.png");
}
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    video.size(380,380);
    document.getElementById("id").innerHTML = "detecting object...";
    objectDetect = ml5.objectDetector('cocossd',modelloded);
}
function modelloded()
{
    console.log("it's working");
    status = true;
}
function gotresult(error,result)
{
    if(error)
    {
        console.log(error);
    }else
    { 
        object = result;
        console.log(result);
    }
}
function draw()
{
    image(video,0,0,600,400);
    r = random(255);
    g = random(255);
    b = random(255);
    if(status != "")
    {
        objectDetect.detect(video,gotresult);
    for(i = 0;i < object.length-1;i++)
    {
        document.getElementById("id").innerHTML = "object_detected";
        fill(r,g,b);
        percent = floor(object[i].confidence * 100);
        text(object[i].label+ "" +percent+"%",object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);
        rect(object[i].x, object[i].y, object[i].height, object[i].width);
    }
}
}