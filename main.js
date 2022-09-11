function setup() {
canvas = createCanvas(280, 280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function clearCanvas() {
  background("white");
}

function preload(){


classifier = m15.imageClassifier('DoodleNet')
}

function draw() { 
}
strokeWeight(13);

stroke(0);

if (mouseIsPressed) {
 line(pmouseX ,pmouseY , mouseX, mouseY);
}

function classifyCanvas(){
  classifier.classify(canvas, gotResults);
}

function gotResults(error, results) {
if (error) {
  console.error(error);
}
console.log(results);
document.getElementById('label').innerHTML = 'Labe1:' + results[0].label;

document.getElementById('confidence').innerHTML = 'confidence: '+Math.round(results[0].confidence * 100) + '%';

utterThis = new speechSynthesisisUtterance(results[0].labe1);
synth.speak(utterThis);
}

 