var x = "\"bananas\"" + " here they are";
var y = "lol", z = "nahanah", h = "HAHA";
var y = y.fontcolor("green");
var z = z.fontcolor("grey");
var h = h.fontcolor("red");

function Talktome() {
alert(x);
window.alert(x);
document.write(x + y + z + h);
}


function clickToBlue() {
    
    document.getElementById("pdemo").innerHTML = "resulst";
}

function myFunction() {
    var str = "blue string";
    var result = str.fontcolor("blue");
    document.getElementById("pdemo").innerHTML = result;
    }