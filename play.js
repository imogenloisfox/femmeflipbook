//image variables 
let img = [];
let img2 = [];
let img3 = [];
let img4 = [];
let img5 = [];
let imageIndex = 0;
let imageIndex2 = 0;
let imageIndex3 = 0;
let imageIndex4 = 0;
let imageIndex5 = 0;

var imageSize = 0;

var buttonSize = 0;

var infoSize = 0;
var infoHeight = 0;
var infoWidth = 0;

var randomSize = 0;
var randomHeight = 0;
var randomWidth = 0;

var homeSize = 0;
var homeHeight = 0;
var homeWidth = 0;

var saveSize = 0;
var saveHeight = 0;
var saveWidth = 0;

var buttonRightWidth = 0;
var buttonLeftWidth = 0;

var buttonHeight0 = 0;
var buttonHeight1 = 0;
var buttonHeight2 = 0;
var buttonHeight3 = 0;
var buttonHeight4 = 0;

var canvas;

let buttonImage;
let buttonImage2;
let infoButton;
let randomButton;
let homeButton;
let saveButton;


let bg;
let bgHeight = 0;
let bgWidth = 0;
let bgSize = 0;


function preload(){

  buttonImage = loadImage('/button/righta.png');
  buttonImage2 = loadImage('/button/lefta.png');
  infoButton = loadImage('/button/arrow1.png');
  bg = loadImage('/button/bg.png');
  randomButton = loadImage('/button/dice.png');
  homeButton = loadImage('/button/flogo.png');
  saveButton = loadImage('/button/save.png');
 

  //head
  img.push(loadImage('/head/face1.png'));
  img.push(loadImage('/head/face2.png'));
  img.push(loadImage('/head/face3.png'));
  img.push(loadImage('/head/face4.png'));
  img.push(loadImage('/head/face5.png'));
  img.push(loadImage('/head/face6.png'));
  img.push(loadImage('/head/face7.png'));
  img.push(loadImage('/head/face8.png'));
  img.push(loadImage('/head/face9.png'));
  img.push(loadImage('/head/face10.png'));
  img.push(loadImage('/head/face11.png'));
  
//neck
  img2.push(loadImage('/neck/torso1.png'));
  img2.push(loadImage('/neck/torso2.png'));
  img2.push(loadImage('/neck/torso3.png'));
  img2.push(loadImage('/neck/torso4.png'));
  img2.push(loadImage('/neck/torso5.png'));
  img2.push(loadImage('/neck/torso6.png'));
  img2.push(loadImage('/neck/torso7.png'));
  img2.push(loadImage('/neck/torso8.png'));
  img2.push(loadImage('/neck/torso9.png'));
  img2.push(loadImage('/neck/torso10.png'));
  img2.push(loadImage('/neck/torso11.png'));

  //stomach
  img3.push(loadImage('/stomach/tummy1.png'));
  img3.push(loadImage('/stomach/tummy2.png'));
  img3.push(loadImage('/stomach/tummy3.png'));
  img3.push(loadImage('/stomach/tummy4.png'));
  img3.push(loadImage('/stomach/tummy5.png'));
  img3.push(loadImage('/stomach/tummy6.png'));
  img3.push(loadImage('/stomach/tummy7.png'));
  img3.push(loadImage('/stomach/tummy8.png'));
  img3.push(loadImage('/stomach/tummy9.png'));
  img3.push(loadImage('/stomach/tummy10.png'));
  img3.push(loadImage('/stomach/tummy11.png'));

  //legs
  img4.push(loadImage('/leg/leg1.png'));
  img4.push(loadImage('/leg/leg2.png'));
  img4.push(loadImage('/leg/leg3.png'));
  img4.push(loadImage('/leg/leg4.png'));
  img4.push(loadImage('/leg/leg5.png'));
  img4.push(loadImage('/leg/leg6.png'));
  img4.push(loadImage('/leg/leg7.png'));
  img4.push(loadImage('/leg/leg8.png'));
  img4.push(loadImage('/leg/leg9.png'));
  img4.push(loadImage('/leg/leg10.png'));
  img4.push(loadImage('/leg/leg11.png'));

  //feet
  img5.push(loadImage('/feet/foot1.png'));
  img5.push(loadImage('/feet/foot2.png'));
  img5.push(loadImage('/feet/foot3.png'));
  img5.push(loadImage('/feet/foot4.png'));
  img5.push(loadImage('/feet/foot5.png'));
  img5.push(loadImage('/feet/foot6.png'));
  img5.push(loadImage('/feet/foot7.png'));
  img5.push(loadImage('/feet/foot8.png'));
  img5.push(loadImage('/feet/foot9.png'));
  img5.push(loadImage('/feet/foot10.png'));
  img5.push(loadImage('/feet/foot11.png'));
 
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 
  canvas.parent("p5Canvas");

  image(img[imageIndex], 0, 0, 0, 400); 
  image(img2[imageIndex2], 0, 0, 400, 400);
  image(img3[imageIndex3], 0, 0, 400, 400); 
  image(img4[imageIndex4], 0, 0, 400, 400);
  image(img5[imageIndex5], 0, 0, 400, 400); 
  
  randomOrder();
}

function randomOrder(){
  imageIndex = int(random(0, img.length-1));
  imageIndex2 = int(random(0, img2.length-1));
  imageIndex3 = int(random(0, img3.length-1));
  imageIndex4 = int(random(0, img4.length-1));
  imageIndex5 = int(random(0, img5.length-1));
}

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
 background(255);

  bgHeight = windowHeight;
  bgWidth = windowWidth;
  bgSize = windowWidth;


  push();
  imageMode(CENTER);
  image(bg, bgWidth/2, bgHeight/2, bgSize, bgSize);
  //bg.resize(bgWidth, bgHeight);
  pop();

  infoSize = windowWidth/25;
  infoWidth = windowWidth*1.15/15;
  infoHeight = windowHeight*1/15;

  randomSize = windowWidth/25;
  randomWidth = windowWidth*1.9/15;
  randomHeight = windowHeight*1/15;

  homeSize = windowWidth/25;
  homeWidth = windowWidth*0.5/15;
  homeHeight = windowHeight*1/15;

  saveSize = windowWidth/25;
  saveWidth = windowWidth*14.25/15;
  saveHeight = windowHeight*13.75/15;

  imageSize = windowWidth/3;
  console.log("the image size is: ", imageSize);

  buttonSize = windowWidth/55;
  buttonRightWidth = windowWidth*2.55/4;
  buttonLeftWidth = windowWidth*1.45/4;

  // buttonHeight0 = (windowHeight*0.9/5);
  // buttonHeight1 = (windowHeight*1.6/5);
  // buttonHeight2 = (windowHeight*2.3/5);
  // buttonHeight3 = (windowHeight*3.2/5);
  // buttonHeight4 = (windowHeight*4.1/5);

  buttonHeight0 = (windowHeight*0.5-200);
  buttonHeight1 = (windowHeight*0.5-100);
  buttonHeight2 = (windowHeight*0.5);
  buttonHeight3 = (windowHeight*0.5+100);
  buttonHeight4 = (windowHeight*0.5+200);

  //save
 push();
 imageMode(CENTER);
 image(saveButton, saveWidth, saveHeight, saveSize, saveSize);
 pop();

 //random
 push();
 imageMode(CENTER);
 image(randomButton, randomWidth, randomHeight, randomSize, randomSize);
 pop();

 //home
 push();
 imageMode(CENTER);
 image(homeButton, homeWidth, homeHeight, homeSize, homeSize);
 pop();

  //info
  push();
  imageMode(CENTER);
  image(infoButton, infoWidth, infoHeight, infoSize, infoSize);
  pop();


      //right
      push();
      imageMode(CENTER);
    image(buttonImage, buttonRightWidth, buttonHeight0, buttonSize, buttonSize);
    image(buttonImage, buttonRightWidth, buttonHeight1, buttonSize, buttonSize);
    image(buttonImage, buttonRightWidth, buttonHeight2, buttonSize, buttonSize);
    image(buttonImage, buttonRightWidth, buttonHeight3, buttonSize, buttonSize);
    image(buttonImage, buttonRightWidth, buttonHeight4, buttonSize, buttonSize);
    pop();

    //left
    push();
    imageMode(CENTER);
    image(buttonImage2, buttonLeftWidth, buttonHeight0, buttonSize, buttonSize);
    image(buttonImage2, buttonLeftWidth, buttonHeight1, buttonSize, buttonSize);
    image(buttonImage2, buttonLeftWidth, buttonHeight2, buttonSize, buttonSize);
    image(buttonImage2, buttonLeftWidth, buttonHeight3, buttonSize, buttonSize);
    image(buttonImage2, buttonLeftWidth, buttonHeight4, buttonSize, buttonSize);
    pop();


  //body images
  push();
  imageMode(CENTER);
  image(img[imageIndex], windowWidth/2, windowHeight/2, imageSize, imageSize); 
  image(img2[imageIndex2], windowWidth/2, windowHeight/2, imageSize, imageSize); 
  image(img3[imageIndex3], windowWidth/2, windowHeight/2, imageSize, imageSize); 
  image(img4[imageIndex4], windowWidth/2, windowHeight/2, imageSize, imageSize); 
  image(img5[imageIndex5], windowWidth/2, windowHeight/2, imageSize, imageSize); 
  pop();

}

function infoMessage() {
  window.alert('𝓌𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝐹𝑒𝓂𝓂𝑒 𝐹𝓁𝒾𝓅𝒷𝑜𝑜𝓀');
  window.alert('𝔻𝕖𝕤𝕚𝕘𝕟𝕖𝕕 𝕒𝕟𝕕 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕕 𝕓𝕪 𝐼𝓂𝑜𝑔𝑒𝓃 𝐹𝑜𝓍, 𝕥𝕙𝕚𝕤 𝕞𝕚𝕔𝕣𝕠-𝕨𝕖𝕓𝕤𝕚𝕥𝕖 𝕒𝕚𝕞𝕤 𝕥𝕠 𝕖𝕩𝕡𝕝𝕠𝕣𝕖 𝕥𝕙𝕖 𝕡𝕠𝕤𝕤𝕚𝕓𝕚𝕝𝕚𝕥𝕚𝕖𝕤 𝕠𝕗 𝕡𝕠𝕤𝕥-𝕙𝕦𝕞𝕒𝕟 𝕓𝕖𝕒𝕦𝕥𝕪 𝕤𝕥𝕒𝕟𝕕𝕒𝕣𝕕𝕤, 𝕚𝕟𝕥𝕖𝕟𝕕𝕚𝕟𝕘 𝕥𝕠 𝕔𝕙𝕒𝕝𝕝𝕖𝕟𝕘𝕖 𝕥𝕙𝕖 𝕖𝕡𝕚𝕥𝕠𝕞𝕖 𝕠𝕗 𝕗𝕖𝕞𝕞𝕖 𝕣𝕖𝕡𝕣𝕖𝕤𝕖𝕟𝕥𝕒𝕥𝕚𝕠𝕟.');
  window.alert('𝕌𝕤𝕚𝕟𝕘 𝕥𝕙𝕖 𝕒𝕣𝕣𝕠𝕨𝕤, 𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕖 𝕪𝕠𝕦𝕣 𝕡𝕣𝕖𝕗𝕖𝕣𝕣𝕖𝕕 𝕕𝕚𝕘𝕚𝕥𝕒𝕝 𝕚𝕕𝕖𝕟𝕥𝕚𝕥𝕪 𝕓𝕪 𝕔𝕙𝕠𝕠𝕤𝕚𝕟𝕘 𝕖𝕒𝕔𝕙 𝕒𝕧𝕒𝕥𝕒𝕣 𝕤𝕖𝕘𝕞𝕖𝕟𝕥. 𝔸𝕝𝕥𝕖𝕣𝕟𝕒𝕥𝕚𝕧𝕖𝕝𝕪, 𝕦𝕤𝕖 𝕥𝕙𝕖 𝕕𝕚𝕔𝕖 𝕓𝕦𝕥𝕥𝕠𝕟 𝕥𝕠 𝕣𝕒𝕟𝕕𝕠𝕞𝕚𝕤𝕖 𝕪𝕠𝕦𝕣 𝕒𝕧𝕒𝕥𝕒𝕣.')
}


function mousePressed(){
  
  // right head
  if(
    mouseX > buttonRightWidth - buttonSize/2 &&
    mouseX < buttonRightWidth + buttonSize/2 &&
    mouseY > buttonHeight0 - buttonSize/2 &&
    mouseY < buttonHeight0 + buttonSize/2
    ){
    if(imageIndex<img.length-1){
      imageIndex ++;
    }else{
      imageIndex = 0;
    } 
  }
  // left head
  if(
    mouseX > buttonLeftWidth - buttonSize/2 &&
    mouseX < buttonLeftWidth + buttonSize/2 &&
    mouseY > buttonHeight0 - buttonSize/2 &&
    mouseY < buttonHeight0 + buttonSize/2
    ){
    if(imageIndex>0){
      imageIndex --;
    }else{
      imageIndex = img.length-1;
    } 
  }


    //right neck
    if(
      mouseX > buttonRightWidth - buttonSize/2 &&
      mouseX < buttonRightWidth + buttonSize/2 &&
      mouseY > buttonHeight1 - buttonSize/2 &&
      mouseY < buttonHeight1 + buttonSize/2
    ){
  if(imageIndex2<img2.length-1){
    imageIndex2 ++;
  }else{
    imageIndex2 = 0;
    }
  }
    //left neck
    if(
      mouseX > buttonLeftWidth - buttonSize/2 &&
      mouseX < buttonLeftWidth + buttonSize/2 &&
      mouseY > buttonHeight1 - buttonSize/2 &&
      mouseY < buttonHeight1 + buttonSize/2
    ){
  if(imageIndex2>0){
    imageIndex2 --;
  }else{
    imageIndex2 = img2.length-1;;
    }
  }


//right stomach
if(
  mouseX > buttonRightWidth - buttonSize/2 &&
  mouseX < buttonRightWidth + buttonSize/2 &&
  mouseY > buttonHeight2 - buttonSize/2 &&
  mouseY < buttonHeight2 + buttonSize/2
){
if(imageIndex3<img3.length-1){
imageIndex3 ++;
}else{
imageIndex3 = 0;
}
}
//left stomach
if(
  mouseX > buttonLeftWidth - buttonSize/2 &&
  mouseX < buttonLeftWidth + buttonSize/2 &&
  mouseY > buttonHeight2 - buttonSize/2 &&
  mouseY < buttonHeight2 + buttonSize/2
){
if(imageIndex3>0){
imageIndex3 --;
}else{
imageIndex3 = img3.length-1;;
}
}


//right leg
if(
  mouseX > buttonRightWidth - buttonSize/2 &&
  mouseX < buttonRightWidth + buttonSize/2 &&
  mouseY > buttonHeight3 - buttonSize/2 &&
  mouseY < buttonHeight3 + buttonSize/2
){
if(imageIndex4<img4.length-1){
imageIndex4 ++;
}else{
imageIndex4 = 0;
}
}
//left leg
if(
  mouseX > buttonLeftWidth - buttonSize/2 &&
  mouseX < buttonLeftWidth + buttonSize/2 &&
  mouseY > buttonHeight3 - buttonSize/2 &&
  mouseY < buttonHeight3 + buttonSize/2
){
if(imageIndex3>0){
imageIndex4 --;
}else{
imageIndex4 = img4.length-1;;
}
}


//right foot
if(
  mouseX > buttonRightWidth - buttonSize/2 &&
  mouseX < buttonRightWidth + buttonSize/2 &&
  mouseY > buttonHeight4 - buttonSize/2 &&
  mouseY < buttonHeight4 + buttonSize/2
){
if(imageIndex5<img5.length-1){
imageIndex5 ++;
}else{
imageIndex5 = 0;
}
}
//left foot
if(
  mouseX > buttonLeftWidth - buttonSize/2 &&
  mouseX < buttonLeftWidth + buttonSize/2 &&
  mouseY > buttonHeight4 - buttonSize/2 &&
  mouseY < buttonHeight4 + buttonSize/2
){
if(imageIndex4>0){
imageIndex5 --;
}else{
imageIndex5 = img5.length-1;;
}
}

//info
if(
  mouseX > infoWidth - infoSize/2 &&
  mouseX < infoWidth + infoSize/2 &&
  mouseY > infoHeight - infoSize/2 &&
  mouseY < infoHeight + infoSize/2
){
  infoMessage();
  
}

//random
if(
  mouseX > randomWidth - randomSize/2 &&
  mouseX < randomWidth + randomSize/2 &&
  mouseY > randomHeight - randomSize/2 &&
  mouseY < randomHeight + randomSize/2
){
  randomOrder();
}

//home
if(
    mouseX > homeWidth - homeSize/2 &&
    mouseX < homeWidth + homeSize/2 &&
    mouseY > homeHeight - homeSize/2 &&
    mouseY < homeHeight + homeSize/2
  ){
    window.open("home.html", "_self");
  } 

  //save
if(
    mouseX > saveWidth - saveSize/2 &&
    mouseX < saveWidth + saveSize/2 &&
    mouseY > saveHeight - saveSize/2 &&
    mouseY < saveHeight + saveSize/2
  ){
    saveCanvas('femmeflipbook', 'png');
  } 

 console.log(imageIndex);

}


