var canvas = new fabric.Canvas("myCanvas");
var speed = 10
var myCanvas =  document.getElementById("myCanvas");
var hd3 = document.getElementById("hd3");
var movesmade = document.getElementById("movesmade");
var tada = new Audio("Tada-sound.mp3");
movesmade.innerHTML = "Moves Made: 0;" + "High Score: " + localStorage.getItem("High Score");
var coins = 0;

var speedBought = false;
var multiBought = false;
var bothBought = false;
// Create canvas variable

//Set initial positions for ball and hole images.
var ball_x = 100;
var ball_y = 100;

var hole_x = 800;
var hole_y = 400;

var count = 0;

var ball_obj = "";
var hole_obj = "";

block_image_width = 5;
block_image_height = 5;
window.onload = load_img();
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(IMG){
		hole_obj = IMG;
		hole_obj.scaleToWidth(75);
		hole_obj.scaleToWidth(75);
		hole_obj.set({
			top:hole_y,
			left:hole_x,
		});
		canvas.add(hole_obj);
	});
	coinsUpdate();
}

function coinsUpdate() {
	document.getElementById("coins").innerHTML = coins.toString();
}

function new_image()
{
		fabric.Image.fromURL("ball.png", function(Image){
		ball_obj = Image;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x,
		});
		canvas.add(ball_obj);
		console.log(ball_x + ", " + ball_y);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if (ball_x == hole_x && ball_y == hole_y) {
		tada.play();

		coins = (1500 - count) + coins;
		document.getElementById("coins").innerHTML = "Coins: " + coins;

		if (multiBought == true ) {
		coins *= 2
		alert("Your Multiplier took effect and you got 2x as many coins")
			if (localStorage.getItem("High Score") <= count) {
				canvas.remove(ball_obj);
				myCanvas.style.borderColor = "red";

				movesmade.innerHTML = "You hit a hole in " + count + " moves!! A new high score!!";
				localStorage.setItem("High Score", count);
			} else {
				console.log("HI2")
				canvas.remove(ball_obj);
				myCanvas.style.borderColor = "red";

				movesmade.innerHTML = "You hit a hole in " + count + " moves!! Try Beating your high score next time!";
			}
		} else {
			if (localStorage.getItem("High Score") <= count) {
				canvas.remove(ball_obj);
				myCanvas.style.borderColor = "red";

				movesmade.innerHTML = "You hit a hole in " + count + " moves!! A new high score!!";
				localStorage.setItem("High Score", count);
			} else {
				console.log("HI2")
				canvas.remove(ball_obj);
				myCanvas.style.borderColor = "red";

				movesmade.innerHTML = "You hit a hole in " + count + " moves!! Try Beating your high score next time!";
			}
		}
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");

		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");

		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");

		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");

		}
	}
	
	
}


function up()
{
	ball_y -= speed;
	count++;
	movesmade.innerHTML = "Moves: " + count + "; High Score:" + localStorage.getItem("High Score") + ";";
	canvas.remove(ball_obj);
	new_image();
}

function down()
{
	ball_y += speed;
	count++;
	movesmade.innerHTML = count;
	canvas.remove(ball_obj);
	new_image();
}

function left()
{
	if(ball_x < 5)
	{
		ball_x = 5;
		
	} else {
		ball_x -= speed;
		count++;
		movesmade.innerHTML = count;
		canvas.remove(ball_obj);
		new_image();
	}
}

function right()
{
	if(ball_x >=1050)
	{
		ball_x = speed50;
	} else {
	ball_x += speed;
	count++;
	movesmade.innerHTML = count;
	canvas.remove(ball_obj);
	new_image();
	}
}

function tryagain() {
	location.reload();
}

function speedUpgrade() {
	if (coins >= 25000 && speedBought == false) {
	speedBought = true;
	alert("Achievement Get: I am speed!")
	alert("Purchase the speed upgrade after getting 25000 coins")
	speed += 10
	} else if (coins < 25000) {
		alert("You don't have enough money to purchase this!")
	} else if (speedBought == true) {
		alert("You already bought this upgrade")
	}
	if (multiBought == true) {
		
	}
}

function multiUpgrade() {
	if (coins >= 50000 && speedBought == false) {
	coins -= 50000
	speedBought = true;
	alert("Achievement Get: Ri¢hie Ri¢h!")
	alert("Purchase the score multiplier upgrade after getting 50000 coins")
	speed += 10
	} else if (coins < 50000) {
		alert("You don't have enough money to purchase this!")
	} else if (multiBought == true) {
		alert("You already bought this upgrade")
	}
}