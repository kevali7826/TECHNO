console.log("hello");

// alert("hello techno");
// 3KEYWORDS IN JS
// VAR,LET,CONST
var date=new Date();
console.log(date);
var firstname=20.7;
console.log(firstname);
var firstvar="kevali kanagale"
//here name is a reserved keyword we use name as in input also in html so....those are resrved key we can't write

var name1='kevali'
console.log(name1);
console.log(typeof firstvar);
var fristvar1="'i' am a don";
console.log(fristvar1);
//boolean values
var firstname2=true;
console.log(typeof firstname2);

var firstvar3=[20,30,"hello",true,undefined];
console.log(firstvar3);
console.log(typeof firstvar3);

var firstvar4=null;
console.log(firstvar4);
console.log(typeof firstvar4);

var firstvar5=undefined;
console.log(firstvar5);
console.log(typeof firstvar5);

var date=new Date();
console.log(date);
console.log(typeof date);

var firstvar6={
    firstname2:"kevali",
    lastname2:"kangale"
};
console.log(firstvar6);
// console.log(lastname2);

// [[],[],[]] it strats in sequence..
// giving ans in line by line is called symcronus
// dynamically typed means no primitive type is defined..like int float this js understand so it is dynamically dei=fined
// we can add multiple varable as a same name but output willbe the last inputed value.

var fristvar="hello techno";
firstvar=[20,30];
firstvr={
    firstname:"kevali",
    lastname:"kanagale"
};
firstvar=true;
console.log(firstvar);

//var,let,const
// to define variables we use 3 keywords
// var:
var num1=20;
num1=30;

// let var2=40;
// var2=50;

// var:
//variable defined with var can be redeclred or can be reassigned
//  let: 
//variable can defined with let cannot be redecalred but can be reassigned
// const: 
// const num3=100;
// num3=1000;
// variable defined with const con not be redeclred or re assigned

//OPERTAORS
//Arithmatic operators
//+,-,*,/
let a=30;
let b=20;
let add=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

let firstName="kevali";
let lastName="kanagake";
console.log(firstName+" "+lastName);

console.log(a**b);
console.log(a%b);
console.log(5+5);
console.log(5+"5");

console.log(5/"5");
console.log("5"/5);
// only in addition will take everyhing as string but if we do in (5-"5"); then it will be in primitive type

//addition assignments operstors
let x=5;
x=x+10;
// or we can write like this  (x+=5;)
console.log(x);
console.log("shubham"+10);
console.log("shubham"-10); //it will give ans like NAN (not a number) is the meaning

 let str1="10";
// not a number ka  type hi number aata hai
let conStr1=+str1;
console.log(+str1);
console.log(typeof conStr1);



// let str="10";
let str="shubham";
// not a number ka  type hi number aata hai
let conStr=+str;
console.log(+str);
console.log(typeof conStr);
// console.log("shubham" -10);

let str3="5";
let str2=+str3;
console.log(5+"5");
//type convertion this makes...in this there is happening string concatination

console.log(100+100);
//substraction assignment operator
let y=10;
y=y-3;
y*=3;
y/=3;
// y-=3
console.log(y);
//reminder and exponentioal assignments
y%=3;
//exponatioal assignments means power 
y**=3;

//comparison operator
let num4=10;
let num5=20;
console.log(num4>num5);
console.log(num4>=num5);
console.log(num4<=num5);
console.log(num4==num5);
console.log(num4!=num5);
// all comaprison operators gives values or ans in boolean values

let num7=10;
let num8="10";
console.log(num7==num8); //this it only sees the values it ignores the variable type..and gives the ans
console.log(num7===num8);//in this it sees the values in which data type you have given  but in this it sees the variable type..and compare the value

//logical operators
//AND(&&) ,OR(|) opertaors
let isLoggedIn=10;
// IN LOGICAL OPERATORS IF IT IS IN + OR - THAT GIVES THE ANS AS TRUE OR POSITIVE BUT IF THERE IS VALUE IS 0(ZERO) THEN IT GIVES FALSE
let isAdmin=-20; 
console.log("is the user logged in and an admin?",isLoggedIn && isAdmin);
//if any value is in positive number 

console.log(10||1000);
console.log(2||1);
// short curcuit evoultion
