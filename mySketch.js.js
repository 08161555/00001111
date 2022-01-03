let colors = "087e8b-ff5a5f-3c3c3c-f5f5f5-c1839f".split('-').map(a => "#" + a)

function setup() {
	createCanvas(2048, 1536);
	background(0, 0, 0);
}

function draw() {
	let colorIdx = floor(random(0, colors.length), colors.length);
	
	stroke(colors[colorIdx]);
	strokeWeight(random(1, 5));
	line(pmouseX, pmouseY, mouseX, mouseY);
	
	if (mouseIsPressed)
	{
		noFill();
		strokeWeight(random(1, 5));
		stroke(colors[colorIdx])
		rectMode(CENTER);
		rect(mouseX, mouseY, 50, 50);
	}
}