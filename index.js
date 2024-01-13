// Rotation functions


var circle = document.getElementById("circle");
var UpBtn = document.getElementById("UpBtn");
var DownBtn = document.getElementById("DownBtn");

var rorateValue = circle.style.transform;

var rotateSum;

UpBtn.onclick = function() {
    rotateSum = rorateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;

    rorateValue = rotateSum;
}

DownBtn.onclick = function() {
    rotateSum = rorateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;

    rorateValue = rotateSum;
}