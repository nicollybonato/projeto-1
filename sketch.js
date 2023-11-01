function setup() {
    createCanvas(600, 600);
    background("hotpink")
  }
  
  function draw() {
    
    fill ("pink");
    stroke("black");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 30, 30);
    }
  }