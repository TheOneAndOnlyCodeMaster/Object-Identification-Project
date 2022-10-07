objects: ;
function preload(){
img_1=loadImage("IMG_0175.jpg");
}
function setup(){
canvas = createCanvas(580, 600);
canvas.position(490, 170);
}
function draw(){
    document.getElementById("status").innerHTML="Detection Status: 3 Objects found"
    image(img_1, 0, 0, 580, 600);
    stroke(250, 0, 0);
    noFill();
    rect(20, 200, 256, 365);
    textSize(15)
    text("Chair", 20, 195);

    stroke(0, 250, 0);
    noFill();
    rect(100, 10, 186, 480);
    textSize(15)
    text("Door", 100, 5);

    stroke(0, 0, 250);
    noFill();
    rect(250, 290, 300, 300);
    textSize(15);
    text("Table", 250, 285)

}