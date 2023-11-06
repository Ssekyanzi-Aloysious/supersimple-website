var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var dnBtn=document.getElementById("dnBtn");

var rotateValue = circle.style.transform ;
var rotateSum;

function triggerUp(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
function triggerDown(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}