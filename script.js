//Hello world! 3 methods
console.log("hello world!");
document.getElementById("text").innerHTML = "Hello World getElementById!";
document.write("Hello World write!");
//window.alert("Hello World!");

//Variable
var a = 1;
var b = 2;
var c = a + b;
console.log(c);

//function
function myFunction(val1, val2) {
    return val1 * val2;
}
var val1 = 6;
var val2 = 12;
console.log(myFunction(val1,val2));

//document
//tip type 'document ... in console to see specific HTML element'
//e.g. 'document.body.style' , we will see stype attribute that we can modify
function changeBG(){
    document.body.style.backgroundColor = "red";
}
