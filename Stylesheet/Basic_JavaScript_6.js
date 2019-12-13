function CheckAge() {
    minAge = 18;
    curAge = document.getElementById("Age").value;
    document.write((curAge < minAge) ? "you are too young to vote":"Line up to vote here!");
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2010, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function MobileHome(Year, Width, Color) {
    this.MobileHome_Year = Year;
    this.MobileHome_Width = Width;
    this.MobileHome_Color = Color;
}
var Home = new MobileHome(1956, "Double Wide", "White")
function myFunction() {
    document.getElementById("Constructor").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " Manufactured in " + Erik.Vehicle_Year + ".";
    document.getElementById("New_and_This").innerHTML = "Emily lives in a " + Home.MobileHome_Year + " " + Home.MobileHome_Width + " that is " + Home.MobileHome_Color + ".";
   var x = true;
    console.log(x);
}
var oldnum = 0;
var num = 0;
function NestedFunction() {
    oldnum = num;
    function PlusOne() {num += 1;}
    PlusOne();
    document.getElementById("Nested_Function").innerHTML = oldnum + num;
}