function Conc() {
    var a = "this ";
    var b = "string ";
    var c = "is ";
    var d = "concatenated.";
    var concresult = a.concat(a,b,c,d);
    console.log(concresult);
    document.getElementById("Doc1").innerHTML = concresult;
}
function slicer() {
    var e = document.getElementById("Doc1").innerText
    var piece = e.slice(6,13);
    document.getElementById("Doc2").innerHTML = piece;
}
function MakeUpper() {
    var f = document.getElementById("Doc2").innerText;
    var up = f.toUpperCase();
    document.getElementById("Doc3").innerHTML = up;
}
function FindG() {
    var g = document.getElementById("Doc1").innerText;
    var h = g.search("g");
    document.getElementById("Doc4").innerHTML = "g is located at " + h;
}
var i = 11;
function getType() {
    document.getElementById("Doc5").innerHTML = typeof(i);
}
function NumtoString() {
    i = i.toString();
    document.getElementById("Doc5").innerHTML = typeof(i);
}
function GetLength() {
    var j = document.getElementById("Doc1").innerText;
    var k = j.length;

    document.getElementById("Doc6").innerHTML = k;
}
function getFixed() {
    l = i.toFixed(10);
    document.getElementById("Doc7").innerHTML = l;
}
function getPrimative() {
    var m = document.getElementById("Doc3").innerHTML;
    var n = m.valueOf;
    document.getElementById("Doc8").innerHTML = n;
    document.getElementById("Doc9").innerHTML = n.typof;
}