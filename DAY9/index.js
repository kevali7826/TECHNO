//conditional statements
// conditinal statements are shown in boolean expression console.log(!0)=>true.. if write in any number it shows false, and string also shows false
//if-alse,switch,ternary operators
//functions
//array,object
//loops
// let count=21;
// if(count==20){
//     console.log("the count is 20");
// }else{
//     console.log("the count is not 20");
// }

// if(count==20){
//     console.log("the count is 20");
// }else if(count>20){
//     console.log("the count is greater than 20");
// }
// else{
//     console.log("the count is less than 20");
// }
// let firstNumber=prompt("enter the first number");
// console.log(firstNumber);

//in terminal node.js doesn.t give access to alert and prompt  and access to but it give access to browser
//prompt the use to enter their username and password
//if both condition is true then display "auth successfull" else "auth failed"

// let Name=prompt("enter your name");
// let password=+prompt("enter your password");  //in this the let password sonvert in prompt in string so we use +
// if(Name==="admin" && password===123){
//     console.log("Auth Successful");
// }else{
//     console.log("Auth Failed");
// }
// let Name1=prompt("enter your name");
// let password1=+prompt("enter your password");
// if(Name=="admin" && password==123){
//     console.log("Auth Successful");
// }else{
//     console.log("Auth Failed");
// }


// nested condinal operator
// if(username==="admin"){
//     if(password===123){
//         console.log("Auth successful");
//     }else{
//         console.log("Auth failed");
//     }
// }else{
//     console.log("Auth failed");
// }

//ternary operator
// let count1=20;
// count1===20?console.log("the count is 20"):console.log("the count is not 20");

// count1===20?console.log("the count is 20"):count1>20?console.log("the count is greater is then 20"):console.log("the count is less then 20");
 
// let userName1=prompt("entr name");
// let password= +prompt("enter password");
// (userName1==="admin" && password===123)?console.log("auth successful"):console.log("auth failed");

//switch cases
let dayNumber=3;
let dayName;
switch(dayNumber){
   case 1:dayName="monday";
   break;
   case 2:dayName="tuesday";
   break;
   case 3:dayName="wednesday";
   break;
   case 4:dayName="thursday";
   break;
   case 5:dayName="friday";
   break;
   case 6:dayName="saturday";
   break;
   case 7:dayName="sunday";
   break;
   default:dayName="invalid day";
}
console.log(dayName);

//functions types: 

//1.function declaration
//2.function expression
//3.arrow function

// 1:function declaration
// function sum(){
//     console.log("this is sum function");
// }
// sum();

//2. function expression
//    kisi variable ke andar function define karna is called function expression
//let sum=function(){
//     console.log("this is function expression");
// }
// sum();

//3.arrow function
//    let sum=()=>{
//     console.log("this is arrow function");
//    }
// sum();


//to except parameter
// let add=(a,b)=>{
//     console.log(a+b);
// }
// add(2,3);


// let add1=(a,b)=>{
//     return a+b;
// }
// let result=add1(2,5);
// console.log(result);


// let add=(a,b)=>a+b;
// let result=add(2,5);
//  console.log(result);


//2nd diffrence between var let const
// global scope/local scope  a5 version
//  new scope in a6 version => Es6-block scope
//   ram ke andar kitna scope mil raha hai..is clalled scope
// puri file ke  addressandar kitna bhi mil raha ho usko d=gobla scope
//function scope=>
    // function func(){
        //is syntax ke andar ka part local scope
    // }

    // if(true){
    // is parenthesis ke andar hota hai vo block scope
    // }else{

    // }

    //var is a global scope=> if defined it in inside the function then it behaves like local scope variable
    // var - global scope variable but in case of function it becomes local scope varable
    // let  &  const => block scope variable

{
    var a=20; 
}
    // var a=20;
     console.log(a);
//var can be take values if we take in block scope

{
    var b=20;
}
{
    var b="shubham";
}
console.log(b);


//let variable in block scope use will not access
{
let b=20;
}
{
    let b="shubham";
}
console.log(b);


//let and var combination
{
    var c=20;
}
{
    let c="shubham";
    console.log(c);
}
console.log(c);


//function declration
function sum(){
    var a=20;
    return a;
}
console.log(a);

//in if else
// if(true){
//     var a=20;
// }
// console.log(a);





