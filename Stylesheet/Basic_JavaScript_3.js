




function doMath() {
    
   
    result = 3 + 5;
    result2 = result - 7;
    result3 = result * result2;
    result4 = result3 / result;
    result5 = 283 % 8;
    result5--;
    result4++;
    result6 = Math.random() * 100;
    document.getElementById("Math").innerHTML = "3 + 5 = " + result;
    document.getElementById("Math2").innerHTML = "3 + 5 - 7 = " + result2;
    document.getElementById("Math3").innerHTML = "3 + 5 * 1 = " + -result3;
    document.getElementById("Math4").innerHTML = "3 + 5  * 1 / 8 = " + result4;
    document.getElementById("Math6").innerHTML = "random number between 1 and 100: " + Math.round(result6);
    document.getElementById("Math5").innerHTML = "283 % 8 = " + result5;
}