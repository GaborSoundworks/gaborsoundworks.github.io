var song;
var ampl;
function preload(){
  song = loadSound('https://audiosgs.s3-us-west-1.amazonaws.com/audio1.mp3');
  ampl = new p5.Amplitude();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  song.play();
}

function draw() {
//background(220);
var lvl = ampl.getLevel();
var size = map(lvl, 0,1,0,200);
var size2 = map(lvl,0,1,0,500);
var size3 = map(lvl,0,1,0,100);

  if(mouseIsPressed === false){
    stroke(0);
    for(i=0;i<10;i=i+1){
      line(mouseX,mouseY+(i*2),mouseX*i,mouseY+(i*2));
    }
  } else {
    textAlign(CENTER,CENTER);
    textSize(40);
    stroke(0);
    text ('Gabor Soundworks',mouseX,mouseY);
  }

//circulo naranja en el centro
/*  for (j=0;j<100;j=j+1){
    noFill();
  //  stroke(250,0,50+(j*2));
    stroke(250,size,50);
    ellipse(width/2,height/2,5*j+size,5*j+size); 5*j

  }*/

  //rotate(frameCount);
  noFill();
  stroke(0);
  rect(width/2,height/2,size2,size2);
  ellipse(width/2,height/2,size2*2,size2*2);


}
