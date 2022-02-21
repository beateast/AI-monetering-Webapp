sta = "";
song = "";

function preload() {
    song = loadSound("emergency.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    objectdetecter = ml5.objectdetecter(cocossd, modelLoaded);
    document.getElementById("sta").innerHTML = "Object is detecting";
}

function modelLoaded() {
    console.log("Model Loaded");
    sta = true;
    objectdetecter.detect(image, gotresult);
}

function gotresult(results, error) { 
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(video, 0, 0, 300, 300);
    if(person != "") {
        objectdetecter.detect(video, gotresult);
        document.getElementById("sta").innerHTML = "status: The person is detected";
        for(i = 0; i < object_length; i++) {
            fill("#FF0000");
            percen = floor(object[i].confidence * 100);
            text(object[i.label + ""+percen + "5"+ object[i].x + 15, object[i].y + 15]);
            nofill();
            stroke("#FF0000");
            rect(object[i].x + object[i].y + object[i].width + object[i].height);

        }
    } else{
        song.play();
        document.getElementById("sta").innerHTML = "status: Baby not found";
    }
}
function play() {
    volume = 1;
}