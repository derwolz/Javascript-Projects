function Dictionary() {
    var Car = {
        Make:"Honda",
        Model:"Accord",
        Year:2003,
        Engine:"V4",
        Year:2003,

    };
    delete Car.Year;
    document.getElementById("Dictionary").innerHTML = Car.Year;
}
