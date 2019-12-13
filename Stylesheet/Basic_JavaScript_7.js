var global = "IM ACCESSED FROM ANYWHERE";
function localvar() {
    var local = "Only accessible from localvar()";
}
function printerror() {
    console.log(local);
}
function IfFunc1() {
    var g = new Date().getHours()
    var doc1result;
    if (g >= 12 && g <= 18) {
        doc1result = "It is after noon";
    } else if (g < 12) {doc1result = "It is before noon";}
    else {doc1result = "it is evening"}
    document.getElementById("Doc1").innerHTML = doc1result;
}
function IfFunc2() {
    var y = 12
    var w = 13
    if (y > w) {
        console.log("Y is greater than W");
    } else {console.log("W is greater than Y")}
}
function IfFunc3() {
    var a = document.getElementById("getNumber").value;
    var b = a % 7;
    var Result;
    if (b == 0){
        Result = a + " is evenly divisible by 7";
    } else {Result = a + " is not evenly divisible by 7"}
    document.getElementById("Doc2").innerHTML = Result;
}