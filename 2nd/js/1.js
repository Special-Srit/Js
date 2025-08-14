function time_lol() {
    let now = new Date();
    let display = now.toLocaleDateString();
    document.getElementById("clock").innerHTML = "Current Time is " + display;
}
setInterval(time_lol, 1000);
let num = 1; //value inserted as interger
let num2 = "2"; //value inserted as text
console.log(typeof num);
console.log(typeof num2);