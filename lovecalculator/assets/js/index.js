function loveCalculate() {
    event.preventDefault();
    var love = Math.floor(Math.random() * 51) + 50;
    var fname =   document.getElementById("fname").value;
    var sname =   document.getElementById("sname").value;
    document.getElementById("result").innerHTML = "Love percentage for " + fname + " and " + sname + " is " + love + "%. ";
    document.getElementById("fname").value = "";
    document.getElementById("sname").value = "";
}