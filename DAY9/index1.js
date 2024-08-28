// ..array and objects
          //0,1,2,3,,4
let arr=[10,20,30,40,50];
// console.log(arr[0]);
console.log(arr[arr.length-1]);
let nestedArr=[10,20,30,[1,2,3,4,5],[20,30,40,["aaa","aab",[true,false]]]];
// let newArr=[nestedArr[nestedArr.length-1].length-1];
// console.log(nestedArr(nestedArr.length-1));
// console.log(newArr);

let newArr1=nestedArr[nestedArr.length-1];
let newArr2=newArr1[newArr1.length-1];
let newArr3=newArr2[newArr2.length-1];
console.log(newArr3[0]);

//objects
//   console.log(arr.length);
// arr[arr.length]="shubham";
// console.log(arr.length);
// console.log(arr);


//or
console.log(arr.length);
arr[2]="shubham";
console.log(arr);

//objects
// connection of the keyvalue pairs
let obj={
    "firstName":"shubham",    //key can be in any type of variable in double quetos or in same as variable
    lastName:"jain"
}
console.log(obj);
console.log(obj.firstName);

//object name is ="mittal"
obj.lastName="Mittal";
console.log(obj.lastName);
obj.section="FSD";
console.log(obj);

  // if we firstName didn't written in double quotes then it should then if its value is written in double quotes then it gives its value..if that value of eirstName exit and has the answer then it will written or else it will throw error that it doesn't  exit
let firstName="section";
console.log(obj["firstName"]);console.log(obj[firstName]);
 //just like upper case only in but in this section the address is written and in jaipur is not exit
let keyName="address";
obj["Address"]="jaipur";
//address can't be written in normally it should be in double quotes


