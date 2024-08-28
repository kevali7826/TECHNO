//events
// //onclick functionthe inside console prints the how many times you click the button then it counts the you pressed buttons
// document.getElementById("button").onclick=function(){
//     console.log("hello techno\n button clicked");
// }

// //when you click on the button it show the box type showes
// document.getElementById("button").onclick=function(){
//     console.log("hello techno\n button clicked");

//    let newDiv= document.createElement("div");
//    newDiv.style.width="200px";
//    newDiv.style.height="200px";
//    newDiv.style.backgroundColor="yellow";
//    document.body.appendChild(newDiv);
// }


// //event listener this comes after the onclick function
// document.getElementById("button").addEventListener("click",function(){
//     let newDiv= document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="yellow";
//     document.body.appendChild(newDiv);
// })
// // click in change, drag, mouse, enter exit enter up down

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor="pink";
    
// })

// document.getElementById("name").addEventListener("change",function(){
   
//     let fieldValue=document.getElementById("name").value;
//     console.log(fieldValue);
// })


document.getElementById("name").addEventListener("change",function(event){
   
    // let fieldValue=document.getElementById("name").value;
    // console.log(fieldValue);
    console.log(event);
})



let obj={};
function getValue(a){
    console.log(a);
    // obj[a.target.name]=a.target.value
    // console.log(obj)
}

document.getElementById("name").addEventListener("change",function(event){
   getValue(event);
});

document.getElementById("name1").addEventListener("change",function(event){
    getValue(event);
 });