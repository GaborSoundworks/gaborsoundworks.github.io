function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250,250,200);
}

function draw() {
 //background(250,250,200);
rotate(0+frameCount);
fill(random(0,100),100,100,50);
 cuadrado(500);
}

function cuadrado(diam) {
//esta bien la declaracion de la variable adentro de la fx
//  var diam;
  rect(width/2,height/2,diam,diam);
}
//no se encuentra la funcion dect() porque solo funcionan dentro de setup o draw
cuadrado(50);
//js lee 1ro variables globales y funciones, y despues las llamadas de las funciones,
//de arriba para abajo, draw function y setup no necesitan ser llamadas, en automatico corren
