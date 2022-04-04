let particles = [];

let res = 3;

let img;

let canvas;

let link;

function preload() {
  img = loadImage("/button/femmef.png");  
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
 
    canvas.parent("p5Canvas");
  placeParticles();
  noStroke();
}

function draw() {
  background(255);

  mousePressed();
  
  //image infront
  //image(img, 0, 0, width, height);
  
  for(let i = 0; i < particles.length; i ++) {
    particles[i].update();
    particles[i].draw();
  }
  //image behind
   //image(img, 0, 0, width, height);
}

function placeParticles() {
  for(let i = 0; i < width; i += res) {
    for(let j = 0; j < height; j += res) {
      let x = (i/width) * img.width;
      let y = (j/height) * img.height;
      let c = img.get(x, y);
      
       //if(c[3] != 0) {
      if(c[0] + c[1] + c[2] != 255 * 3) {
        particles.push(new Particle(i, j, c))
      }
      
    }
  }
}

class Particle {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    
    this.c = c;
    
    this.homeX = x;
    this.homeY = y;
  }
  
  update() {
    
    // mouse
    let mouseD = dist(this.x, this.y, mouseX, mouseY);
    let mouseA = atan2(this.y - mouseY, this.x - mouseX);
    
    // home
    let homeD = dist(this.x, this.y, this.homeX, this.homeY);
    let homeA = atan2(this.homeY - this.y, this.homeX - this.x);
    
    // forces
    let mouseF = constrain(map(mouseD, 0, 100, 10, 0), 0, 10);
    let homeF = map(homeD, 0, 100, 0, 10);
    
    let vx = cos(mouseA) * mouseF;
    vx += cos(homeA) * homeF;
    
    let vy = sin(mouseA) * mouseF;
    vy += sin(homeA) * homeF;
    
    
    this.x += vx;
    this.y += vy;
  }
  
  draw() {
    
    fill(this.c);
    //stroke(this.c);
    ellipse(this.x, this.y, res, res);
  }
}

function mousePressed(){
    if(mouseIsPressed == true){
  window.open("indextwo.html", "_self");
    } 
}