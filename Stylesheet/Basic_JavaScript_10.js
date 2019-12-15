function Call_Loop() {
    setTimeout(looper, 2000);
    function looper() {
        var x = 0;
        while (x < 10)
        x++
        document.getElementById("Loop").innerHTML = x;
    }
}

function getLength() {
    document.getElementById("lengthsult").innerHTML = document.getElementById("lengthy").innerText.length;
}
var instruments = [];
instruments[0] = "violin";
instruments[1] = "tuba";
instruments[2] = "saxophone";
instruments[3] = "piano";
instruments[4] = "clarinet";
instruments[5] = "flute";
instruments[6] = "snare drum";
instruments[7] = "guitar";
const instrument_price = [150, 230, 5000, 180, 150, 100, 140];
function listInstruments() {
    var Instrumentlist = "";
   
    for (x = 0; x < instruments.length; x++) {
        Instrumentlist = Instrumentlist + instruments[x] + ": " + instrument_price[x] + "$, ";
    }
    document.getElementById("List_Of_Instruments").innerHTML = Instrumentlist;
    
}
function getPrices() {
    var inList = "";
    for (x = 0; x < instrument_price.length; x++) {
        inList = inList + instrument_price[x] + ", "
    }
    document.getElementById("Constant").innerHTML = inList;
}
function arrayFunction() {
    n = document.getElementById("instindex").value;
    if (n < instruments.length) {
    document.getElementById("Array").innerHTML = instruments[n];
    } else document.getElementById("Array").innerHTML = "Number is out of bounds";

}


function let_command() {
    var letter = 52;
    document.getElementById("b4lettey").innerHTML = letter;
    function lettyletter() {
        let letter = "banana";
        return letter;
    }
    document.getElementById("lettey").innerHTML = lettyletter();
}
let trees = {
    Fruit: "Banana",
    IsDeciduous: true,
    Ecosystem: "tropical",
    IsHardwood: false,
    description : function returnecosystem() {
        return "The " + this.Fruit + " tree grows in a " + this.Ecosystem + "environment." 
    }
}

function GetEcosystem() {
    document.getElementById("getecosystem").innerHTML = trees.description();
}

function WatchLog() {
    for ( x = 0; x < 10; x++) {
        if (x == 7) {continue;}
        if (x == 9) {break;}
        console.log(x);
    }
}