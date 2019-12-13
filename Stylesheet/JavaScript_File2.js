var numsult = 0;
function changethisto() {
    var TtoM = document.getElementById("JS1").innerText;
    var TtoM2 = document.getElementById("JS2").innerText;
  
    result = TtoM + ". " + TtoM2 + ".";
    
    document.getElementById("JS3").innerHTML = result;

}


function countThis() {
    numsult += 1;
    document.getElementById("JS4").innerText = numsult;
}