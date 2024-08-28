//date,rest.spread,dom

let date=new Date();
// console.log(date);
// console.log(typeof date);
// console.log(date.getDate());  //it will show today's day
// console.log(date.getDay());    //1-7
// console.log(date.getMonth());   //0-11
// console.log(date.getFullYear());  //it will show present year
// console.log(date.getTime());
// console.log(date.toDateString());
// console.log(date.toTimeString());
//local : kolkatta , fecific  ,asia
// console.log(date.toMinuteString());


// console.log(date.toLocaleDateStriing());
// console.log(date.toLocaleTimeString());


// let arr=[10,20,30,40,50,80];
// let num=arr[2];

// // let [first, ,third]=arr;  //or==>let [num]=arr;
// // console.log(first,third);

// let [first, ...newArr]=arr;   //rst operator ki tarah kaam karega (...)  on the time of destructuring
// console.log(first);
// console.log(newArr);

//  step1:  let arr=[10,20];
//  stp1: let arr=[10];
// // step2:  let [num1,num2=100]=arr;
// //  step 3: console.log(num1,num2);
// stp2:// let [num1,num2]=arr;
// stp3: console.log(num1,num2);

// let obj={
//     firstName:"shubham",
//     lastName:"jain",
//     address:"jaipur",
//     gender:"male"
// }

// let {firstName}=obj;

// console.log(firstName);
// console.log(lastName);
// console.log(address);
// console.log(gender);

// let obj1={};
// // obj1[firstName]="xyz";
// // console.log(obj1);

// // or
// let {firstName,address}=obj;
// // console.log(firstName);
// // let obj1={};
// obj1[firstName]="xyz";
// obj1[address]="abc";
// console.log(obj1);

// ......,,...........................

let obj={
    firstName:"shubham",
    lastName:"jain",
    address:"jaipur",
    gender:"male"
}
// let obj1={};
// // let {firstName,address}=obj;
// obj1[firstName]="xyz";
// obj1[address]="abc";
// console.log(obj1);

// //or
// // default value
// let {firstName,address="jaipur"}=obj;
// obj1[firstName]="xyz";
// obj1[address];
// console.log(obj1);


// let obj={
//     firstName:"shubham",
//     lastName:"jain",
//     address:"jaipur",
//     gender:"male"
// }
// let {firstName:a,address}=obj;
// console.log(a);


// let arr1=[10,20,30];
// let arr2=arr1;
// arr2.push(1000);
// console.log(arr1);
// console.log(arr2);
// console.log(arr1===arr2);
//memeory me address milta hai..it gives priority to referencess first goes to address prioruty then it goes to memory

let num1=10;
let num2=num1;
num1=+10;
console.log(num1);
console.log(typeof num1);


// let arr1=[10,20,30];
// let arr2=[10,20,30];
// arr2.push(1000);
// console.log(arr1);
// console.log(arr2);
// console.log(arr1===arr2);

// let arr1=[10,20,30];
// let arr2=[...arr1];
// arr2.push(1000);
// console.log(arr1);
// console.log(arr2);

// let arr1=[10,20,30];
// let arr2=[30,40,50];

// let arr3=[...arr1,...arr2];
// console.log(arr3);

// let arr3=[...arr1,100,...arr2,20,1000];
// console.log(arr3);


// let obj1={
//     firstName:"shubham",
//     lastName:"jain"
// }

// let obj2={
//     firstName:"vinay",
//     address:"jaipur",
//     gender:"male"
// }

// let obj3={...obj1,...obj2,section:"FSD"};   // and this replace the obj1 of firstname to obj2 firstname
// let obj3={...obj2,...obj1,section:"FSD"};   //it replce firstname og obj2 to obj2 firstname
// console.log(obj3);  




//DOM ==> DOCUMENT OBJECT MODEL
// it shows in the document page on web browser
//node which has the 2 CHILDREN AND THAT HAS THE NO DE TO SLELECRT
// TEN FUNCTION IOF YOU WANT TO RUN
// SELECT NODE THEN HTML ANS CSS DYMAMIC IF YOU WANT TO DO
// THIS TELL ABOUT THE DOM
