// let myDiv=document.getElementById("main");
// 
// console.log(myDiv.getAtrribute("id"));
// let myDiv=document.getElementById("main");
// console.log(myDiv.getAttribute("id"));

// myDiv.id="container";
// myDiv.className="heading";
// myDiv.style.width="200px";
// myDiv.style.height="200px";
// myDiv.style.background="green";
// myDiv.style.borderRadius="20px";
// console.log(myDiv.getAttribute("class"));

// console.log(myDiv.getAttribute("style"));
// STYLES ARE ONJECT THOSE ARE REPLACEBLE OBJECTS ARE REPLCBLE  STRING IN CASE PURI VALUE REPLCE HO JATI HAI.
//

// myDiv.setAttribute("id","text");
// console.log(myDiv.getAttribute("id"));

// myDiv.setAttribute("style","width:200px","height:200px","background-color:red");
// myDiv.setAttribute("style","background-color:red");



//OBJECT ISKE ANDAR ID AND STLE CHANGE NAI HOTE LEKIN ..AGAR HUM SET ATRRIBUTE  jab style pe likhte hai..to vo puri uski style change karke..bas abhi jo style diya hai vahi rehta hai
// let obj={
//     id:"main",
//     style:{
//         width:"200px",
//         height:"200px",
//         backgroundColor:"green"
//     }
// }
// obj.id="container";
// obj.style.borderRadius="20px";

// //set Atrribute
// obj.id="head";
// obj.style={
//     backgroundColor:"red"
// }

// //inner html,inner text,textContent

// console.log(myDiv.text);
// console.log(myDiv.innerHTML)

// // // myDiv.innerHTML="<input type=password' placeholder='enter password' > <button>submit</button>"

// console.log(myDiv.textContent);
// console.log(myDiv.innerText);  //console the hidden text also


// .................................
// let myDiv=document.getElementsByClassName("head");  // claases are multiple..id wer unique but clasess are multiple we can use them as multiple
// console.log(myDiv);
// //  myDiv[4];
//  console.log(myDiv[4]);


// let myDiv=documnet.getElementsByTagName("div");
// console.log(myDiv);
 
// let colorArr=["red","yellow","green","orange","magneta","black","brown","pink","blue","violet"];
// for(let i=0;i<myDiv.length;i++){
//     myDiv[i].style.padding="20px";
//     myDiv[i].style.margin="10px";
//     myDiv[i].style.backgroundColor=colorArr[i];
//     // myDiv[i].style.borderRadius=`${i*10}px`;

// }

// .....................

// QUERY SELECTOR

// by id: 
// let myDiv=document.querySelector("") //IF WE WANT TO SELELCT BY TAG OR CLASS OR ID WE CAN FILL IN THIS PARENTHESIS
// //tag ,id,class ,sab kuch select kar sakte hai
// console.log(myDiv);


//by class: 
// let myDiv=document.querySelector(".head") //IF WE WANT TO SELELCT BY TAG OR CLASS OR ID WE CAN FILL IN THIS PARENTHESIS
// console.log(myDiv);
//    class name will be denoted by .class and it will f=give only first head name

// by element: 
// let myDiv=document.querySelector("h1") //IF WE WANT TO SELELCT BY TAG OR CLASS OR ID WE CAN FILL IN THIS PARENTHESIS
// console.log(myDiv);


// if we write in document.getElementById() & document.getElementByClassName() it gives the HTMLCollection
//   querySelelctor() it gives nodelist
// araay like structure in this nodelist

// let myDiv1=document.document.getElementById("h1") //IF WE WANT TO SELELCT BY TAG OR CLASS OR ID WE CAN FILL IN THIS PARENTHESIS
// console.log(myDiv);


// myDiv.map((item)=>{item.style.backgroundColor="yellow"});  //prototype inheritance the js work in the prototype and js work in the object form
// //myDiv is in the nodelist and it doesn't work on map

// myDiv1.map((item)=>{item.style.backgroundColor="yellow"}); //myDiv1 is html collection is not work on map

// myDiv.forEach((item)=>{item.style.backgroundColor="yellow"});   //only the nodelist work on the forEach

// myDiv1.forEach((item)=>{item.style.backgroundColor="yellow"});  //html collection does not work on the forEach

//js frontend me kya  or kese kaam karta hai?

// let myDiv=documnet.querySelectorAll(".head");

document.createElement("div");
let newDiv=document.createElement("div");
// console.log(myDiv);
newDiv.id="heading";
// myDiv.style.height="20px";
// myDiv.style.width="20px";
// myDiv.style.backgroundColor="brown";
newDiv.innerHTML="hello techno";
document.body.appendChild(newDiv);
// document.body.removeChild(newDiv);

let myDiv2=document.getElementById("main");

// document.getElementById("heading");
// myDiv2.apendChild(newDiv);
let myDiv3=document.getElementById("container");

let parentDiv=document.getElementById("heading");
parentDiv.insertBefore(newDiv,myDiv3);























































