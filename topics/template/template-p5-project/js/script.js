let p;

function setup() {
  createCanvas(300, 300);

  background(200);

  // Create a paragraph element.
  p = createP("p5*js");
  p.position(10, 10);
}

// Hide the paragraph when the user double-clicks.
function mousePressed() {
  p.hide();
}
