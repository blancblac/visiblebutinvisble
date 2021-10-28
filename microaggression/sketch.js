var sensativity = 0.005;
let theShader;
let shaderTexture;
let theta = 0;
let cam;
let ca;
let cityb;
let opening;
let loading = true;
let bus;
let musik;
let WldB = [];
let WldA = [];

function preload(){
  theShader = loadShader('webcam.vert', 'webcam.frag');
  cityb = loadModel('samarra1.obj');
  opening = loadImage('microaggression.jpg');
mirror = loadModel('mirror.obj');
soundFormats('mp3', 'ogg');
bus = loadSound('bussound.mp3');
musik = bus;

}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);

  //for shader
  noStroke();
  cam = createCapture(VIDEO);
  //cam.size(windowWidth, windowHeight);
  cam.size();
  cam.hide();
  ca = createCamera();

  shaderTexture = createGraphics(windowWidth, windowHeight, WEBGL);

  // turn off the createGraphics layers stroke
  shaderTexture.noStroke();

  if (loading) {
  //background(255);
  push();
  texture(opening);
    frameRate(0.5);
  plane(windowWidth, windowHeight, 200, 200);
// plane is drawn on xy plane
  pop();

} else {
  setTimeout (draw, 5000);

}
for (let i=0;i<80;i++){
WldA[i] = new Buildings();
}

for (let i=0;i<80;i++){
WldB[i] = new Citys();
}
musik.loop();
musik.play();
}



function draw() {
frameRate(60);
background(0);
orbitControl();
pointLight(100,0,100, -50, 0, 100);
ambientLight(200,200,200);
colorMode(RGB);

for(let i=0;i<WldA.length;i++){
WldA[i].show();
}
  for(let i=0;i<WldB.length;i++){
WldB[i].show();
}

drawCity();
drawWorld();

push();
shaderTexture.shader(theShader);
theShader.setUniform("tex0", cam);
shaderTexture.rect(0, 0, width, height);
texture(shaderTexture);
translate(0,-100,150);
rotateY(theta);
theta += 0.01;
noStroke();
box(400,800,300);
//sphere(250);
pop();

push();
translate(0,500,100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(119, 89, 81);
cylinder(500, 300);
pop();
push();
translate(0,-700,100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(119, 89, 81);
cylinder(500, 300);
pop();
//감옥창살, 창살을 노란색으로
push();
translate(-100,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-200,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();

//감옥 좌측 방향
push();
translate(-300,-100,400);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,300);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,200);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,0);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(100,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(200,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();

//감옥 우측방향
push();
translate(300,-100,400);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,300);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,200);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,0);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(0,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-100,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-200,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,500);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();

//감옥 좌측 방향
push();
translate(-300,-100,400);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,300);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,200);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,0);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();

//감옥 뒷방향
push();
translate(100,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(200,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(300,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(0,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-100,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-200,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();
push();
translate(-300,-100,-100);
rotateX(PI);
rotateY(PI);
noStroke();
fill(0);
box(20,900,20);
pop();

}

function drawCity() {
// draw ground
push();
translate(0,-800,100);
rotateX(PI/2);
rotateY(PI);
noStroke();
pointLight(100,20,100, 500,0,10);
fill(195, 139, 97);
box(2000, 2000,100);
pop();
}
function drawWorld() {
// draw ground
push();
translate(0,650,100);
rotateX(PI/2);
rotateY(PI);
noStroke();
//pointLight(100,20,100, 500,0,10);
fill(195, 139, 97);
box(2000, 2000,100);
pop();
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
class Buildings {
  constructor() {
    this.x = random(-900,900);
    /*
    if(-250<=this.x<=this.x){
      (this.x == false);
    }
    */
    this.y = random(-900,900);
  }

  show() {
    stroke(5);
    strokeWeight(0.5);
    push();
    translate(this.x,-650,this.y);
    fill(88,0,0);
    rotateX(PI/2);
    rotateY(PI);
    scale(0.13);
    model(cityb);
    pop();
  }
}

class Citys{
  constructor() {
    this.x = random(-900,900);
    /*
    if(-250<=this.x<=this.x){
      (this.x == false);
    }
    */
    this.y = random(-900,900);
  }

  show() {
    stroke(5);
    strokeWeight(0.5);
    push();
    translate(this.x,500,this.y);
    fill(248, 215, 169);
    rotateX(PI/2);
    rotateY(PI*2);
    scale(0.13);
    model(cityb);
    pop();
  }
}
