function WriteType() {
    document.write(typeof 7);
    document.write(typeof "word");
    document.write(typeof true);
    document.write(isNaN(0/0));
    document.write(isNaN(5))
    document.write(" ");
    document.write(8 > 7);
    document.write(" ");
    document.write(7 > 8);
}
function WriteINF() {
    result = 1E309
    result2 = -2E309
    document.getElementById("pInf").innerHTML = result;
    document.getElementById("nInf").innerHTML = result2;
}
function logeroni() {
    console.log( 7 > 4);
    console.log("text");
    console.log(3 % 7);
    console.log(true == false);
    console.log(" ")
    console.log("text" == "text");
}
function CoerceNumber() {
    var x = 10;
    var y = "10";
    var z = 10;
    var w = true;
    var u = 12;

    document.write("11" + 19);
    document.write(" === operator ");
    document.write(x === y);
    document.write(x === z);
    document.write(x === w);
    document.write(x === u);
    document.write(" And/OR operators ")
    document.write(x !== w && x === z);
    document.write(x == u && x == z);
    document.write(x == z || x > u);
    document.write(x !== z || x > z);

}
