//event loo,timer functions,call back hell,promises,async await,constructor classes
// let a=20;
// let b=1000;
// function sum(){
//     let x=200;
//    let y=300;
//    function add(){
//     return x+y;
//    }
//    return add();
// }


//kisi varaibale ko access karne se pehle declare kar dena usko hoisting  bolte hai
//there are 2 columns
// variable environment    code environment or execution environment
//   1.first they will declare the code
//   2. hoising 20/50 module
//TDZ tempral zee code.

// let sum=function (){
//     let x=200;
//     let y=300;
//     function add(){
//         return x+y;
//     }
//     return add();
// }
// let c=100;
// console.log(a,b,c);
// sum();


//timer functions

// let id2=setTimeout (()=>{
// console.log("hello techno");
// },2000);

// let id1=setInterval (()=>{
//     // console.log("hello techno");
//     console.log(Math.random());
// },2000);

// document.getElementById("button").addEventListener("click",function(){
//     console.log("stop buton clicked");
//     clearInterval(id1);
// })

// document.getElementById("timeout").addEventListener("click",function(){
//     console.log("stop the set time out");
//     clearTimeout(id2);
// });

//asyncronus (async)js
// let a=20;
// let b=30;
// console.group(a+b);
//   setTimeout (()=>{
//       console.log("kevali");
//   },2000);
//   console.log(a);
//   console.group(a+b);
//   setTimeout (()=>{
//       console.log("ashok");
//   },3000);
//   console.log(a);


  //promises

  //call backs through
  function step1(callback)
    {
        setTimeout(()=>{
            console.log("step 1 completed");
            callback();
          },1000)
        
        }
      
        function step2(callback)
        {
            setTimeout(()=>{
                console.log("step 2 completed");
                callback();
              },1000)
            
            }
  
            function step3(callback)
            {
                setTimeout(()=>{
                    console.log("step 3 completed");
                    callback();
                  },1000)
                
                }

//   step1(()=>{
//     step2(()=>{
//         step3(()=>{
// console.log("all steps are completed");
//         })
//     })
//   })

//call back hell//a6 version when it is lunched that time the promises when designed..


// promises is object that contin multiple values..
// 3rd party gives the api fetch ke baad primises pata chalte hai

// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let data={
//                 firstname:"kevsli",
//                 lastname:"jain"
//             };
//         //    return resolve(data);
//         // or 
//         return reject(data);
//         },2000);
//     })
// }

// fetchdata();
// let fetchdata2=fetchdata();
// console.log(fetchdata);


function fetchdata1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
let data={
    firstname:"shubahm",
    lastname:"jain"
};
return  resolve(data);
            }catch(erorr){
             return  reject(data);
            }
        },2000);
    })
}
let fetchdata=fetchdata1();
console.log(fetchdata1);


//exception handling and erooor handling try and catch block is used
//promise is a constructer

//promises state --pending,fulfilled,rejected
//pending--fulfilled
// or
//pending --rejected

// methods oto define promeos data
// fetchdata.then((data)=>{
// //if it is fufileed then it run in then
// console.log(data);
// })
// .catch((erorr)=>{
//     //if it is rejected then it run in then 
//     console.log(erorr);
// });


//https://fakestoreapi.com/products

function fetchdata5(){
    let data=fetch("https://fakestoreapi.com/products");
    console.log("next promidsed")
    // data:price*2;
    return data;
}


// let fetcheddata4=fetchdata5();
// console.log(fetcheddata4);

// fetcheddata4.then((Res)=>{
//     console.log(Res.json());
// })
// .catch((erorr)=>{
//     console.log(erorr);
// })


let fetcheddata4=fetchdata5();
console.log(fetcheddata4);

fetcheddata4.then((Res)=>{
  return Res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((erorr)=>{
    console.log(erorr);
})


// task.....................
// document.set
// document.createElement("id");
// let newdiv=document.createElement("div");
// newdiv.id="heading";



let myDiv=document.getElementById("main");
console.log(mydiv);






















