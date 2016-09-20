// document.addEventListener("DOMContentLoaded", function() {
	
// 	var ball1 = document.getElementById("ball1");
	

// 	var ball2 = document.getElementById("ball2");
	
// 	var p = document.getElementsByClassName("parent");
// 	p[0].style.backgroundColor= "white";

// 	var position = 0;
// 	var moveBalls = function(){
// 		position = position + 10;
// 	ball1.style.transform = "position(" + degree + "deg)";
// };

// 	window.setInterval(rotateDiv, 10);

// });

function myMove() {
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      ball1.style.top = pos + 'px';
      ball1.style.left = pos + 'px';
    }
  }
}

function myMove2() {
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      ball2.style.top = pos + 'px';
      ball2.style.left = pos + 'px';
    }
  }
}

var color = (255, 255, 24);
var changeColor = function(){
    color = getRandomColor()
    ball1.style.backgroundColor = color;

};

window.setInterval(changeColor, getRandomColor());



function setBackground()
{
window.setTimeout( "setBackground()", 5000); // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

ball1.style.backgroundColor = "#" + ColorValue;

};

window.setInterval(changeColor, getRandomColor());




























