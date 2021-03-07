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

//arrow function
var hello = name => "Hello world! array function " + name;
console.log(hello("Iceyo"));

//document
//tip type 'document ... in console to see specific HTML element'
//e.g. 'document.body.style' , we will see stype attribute that we can modify
function changeBG(){
    document.body.style.backgroundColor = "red";
}

//object
var user = {
    firstname:"Iceyo",
    lastname:"Kuna",
    age:"24",
    introduce: function(){
        return this.firstname + this.lastname;
    }  
};
console.log(user.introduce());

//array
var arr1 = ['a','b'];
var arr2 = ['c'];
console.log(arr1+arr2);

//typeof() -> check object
//type conversion -> Number() String()


//class
//like function but classy
//support inheritance as Python using extend
class Car{
    constructor(kind){
        this.kind = kind
    }
}
var car  = new Car();

