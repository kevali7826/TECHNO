// let arr=[10,20,30,40];
// let filteredArr=arr.filter((item)=>item>30);   //to find all values greater than the value we use filter but only one elment to get one elemnt greater then one
// or==>  arr.filter((item)=>{item>30});   ...written should be in single line then we can or can not use curly braces
// console.log(filteredArr);

//reduce
// let sum=arr.reduce((acc,curr)=>acc+curr);   //accumulator,current value
//                                             // initial value=0,10   =>10
//       console.log(sum);                                        //   10+20=>30
                                              // 30+30=>60
                                              // 60+40=>100

// ==> to find sum of initial value or sum of numbers we use like this : 
//  let sum1=arr.reduce((acc,curr)=>{
//      return acc+curr;
//     },1000);      //we can add current value initilizing in this form.        

// console.log(sum1);


// ==> to find greater than 20 we use this method:
// let arr=[10,20,30,40,50];
// let foundItem=arr.find((item)=>item>20);
// console.log(foundItem);

// ==> to find index of greater than given value:
// let foundElementIndex= arr.findIndex(item=>item>20);
// console.log(foundElementIndex);

// let arr=[35,20,35,40,50];
// let arr=[31,21,41,51,60];  //this will gives true.. if any number is even in this array then it will return true. if all elements are not even then only it gives false answer
// let hasEven=arr.some((item)=>item%2==0);
// console.log(hasEven);

// let arr=[11,21,31,41,51];
// let arr=[30,20,30,40,50];
// let arr=[30,20,35,40,50];    //if any number is not even then  it willreturn false
// let evenArr=arr.every((item)=>item%2===0);
// console.log(evenArr);

//object methods: 

// let obj={
//  firstName:"Shubham",
//  lastName:"jain"
// }
//object constuctor==> key,keys ,values

//to get the variables of object ==> 
// let keys=Object.keys(obj);   //object se headings nikal sakte hai..
// console.log(keys);


//: get the values og=f those objects==:
// let values=Object.values(obj);
// console.log(values);


// it givesthe both variables and values also.==> 
// let entries=Object.entries(obj);
// console.log(entries);


// let obj={
// firstName:"shubham",
// lastName:"jain"
// }

// Object.freeze(obj);
// obj.firstName="vinay";
// obj.address='jaipur'; //by writing freeze that will not change anything that you made any kind of editing in the object
// console.log(obj);

// const num=20;
// num=50;       //this will show error becoz const can be define once and give only once to a variable
// console.log(num);

// let num=20;
// num=50;     //this will give an ans and var also gives ans
// console.log(num);

// const object1={
//     firstName:"shubham",
//     lastName:"jain"
// }

// object1.firstName="vinay";  //this will give an ans to the bcoz of writing the 
// console.log(object1);

// object1="vinay"; //if we write the or manipulte the object without writing the variable name then it can't give any and it give error 

///interview quston>
// Q==> question on freeze and obj and const ..agar me freexze laagaunga to kya hoga..yese interview question puchte hai


//object .seal iske andar adress new values nai aane dega.,lekin pehle se jo hoga usko change kar sakta hai
// let obj={
//     firstName:"shubham",
//     lastName:"jain"
// }
// Object.seal(obj);
// obj.firstName="vinay";
// obj.address="jaipur";
// console.log(obj);

// console.log(obj.hasOwnProperty("gender"));   //if gender exit in this key then it gives true value otherwise it gives false value


// STRING METHODS==>
//     let str="hello world";
// let char =str.charAt(7);  //it gives index value of str
// console.log(char);

// let str="hello world";
// let newStr=str.concat(" techno");
// console.log(newStr);

// let hasWorld=str.includes("world");   
// console.log(hasWorld);

// let hasWorld1=str.includes("World");   //it gives false becoz it is case sensitive  
// console.log(hasWorld1);

// let str="hello world";
//  let index=str.indexOf("w");
//  console.log(index);
//  let index1=str.lastIndexOf("o");
//  console.log(index1);

// SPLICE AND SLICE IN STRING METHODS==>
//     let str="Hello Wolrd";
//  let slicedStr=str.slice(3,9);   
//  console.log(slicedStr);
//  let slicedStr1=str.slice(-5);  // in slice if we give it the negative value then  it goes from last element and gives a subtring like slice
//  console.log(slicedStr1);

//  let subStr=str.substring(4,8);
//  console.log(subStr);
//  let subStr1=str.substring(-5); //negetive values it see as a zero and return the full string
//  console.log(subStr1);

//  let str1="hello world";
//  let newStr=str.toLowerCase(str1);
//  console.log(newStr);
//  let newStr2=str.toUpperCase(str1);
//  console.log(newStr2);


// ==> trim method==>
//  let str3="     hello    world     ";
//  console.log(str3.length);
// let trimmedStr=str3.trim();
// console.log(trimmedStr);
// console.log(trimmedStr.length);


// Q => slice,splice,split,map,filter==> splice only in array it work array ..split only in string it work b ut slice it work on both

// split method: ==>
// let str="hello world kevsali ashok kanagale";
// let splittesStr=str.split("");
// console.log(splittesStr);
// let splittesStr1=str.split(",");
// console.log(splittesStr1);

// let str="hello world";
// let newStr=str.replace("world","techno");
// console.log(newStr);

// let newStrr=str.repeat(2);
// console.log(newStrr);

// MATH OBJECT==>
//     let num=Math.random();
// console.log(num);

// let num=10.7343;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));

let otp=Math.random()*9000
console.log(1000+Math.floor(otp));

