img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    stroke("#FF0000")
    noFill();
    rect(30, 50, 420, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    stroke("#FF0000")
    noFill();
    rect(300, 90, 270, 320);
}