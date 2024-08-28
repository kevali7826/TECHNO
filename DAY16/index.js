// Asyac await
//by synce writing async that we tell that this function will run as asnyc
// async function fetchdata(){
//    try{
//     let response= await fetch("https://fakestoreapi.com/products");
//   console.log(response)
//    }catch(erorr){
//     console.log(erorr);
//    }

// }

// .................

// let user={
//     username:"shubahm",
//     age:"40",
//     getUserDetails:function(){

//         console.log(this);
        // console.log(`hello my username if ${this.username} and my age is ${this.age}`);
//     }
// }
// outside the this we use then in browser it shows the window
// console.log(this);
// user.getUserDetails();

// constructors  --functions not clasess


// function Person(name,age){
//   const personObj={
//     username:name,
//     age:age,
//     greet:function(){
//         console.log(`hello, my name is ${this.username} and my age is ${this.age}`);
//     }
//   }
//   return personObj;
// }

// const person1=Person("shubham","40");
// const person2=Person("vinay",50);
// person1.greet();
// person2.greet();
// console.log(person1.greet());
// console.log(person2.greet());


// function Person(name,age)
// {
//   console.log(this);
// }
// Person();




// function Person2(name,age){
//    this.username=name;
//    this.age=age;
// //    this.greet=function(){
// //     console.log(`hello, my name is ${this.username} amd my age is  ${this.age}`);
// //    }
   
// }

//this function will acess with anyone in the next new constucotr you make 
// Person2.prototype.greet=function(){
//     this.greet=function(){
//         console.log(`hello, my name is ${this.username} amd my age is  ${this.age}`);
//        }
// }



// const Person3=new Person2("shubham","40");
// const Person4=new Person2("vinay","50");
// console.log(Person3);
// console.log(Person4);
// Person3.greet();
// Person4.greet();
// // Person2();


// let arr=[10,20,30];
// console.log(arr);


//classes
// class Person{
//     constructor(name,age){
//       this.name=name;
//       this.age=age;
//     }

// greet(){
//      console.log(`hello, my name is ${this.username} amd my age is  ${this.age}`);
           
// }

// }

// //it is not fully object orinted program
// //we can use encapsulation

// const Person1=new Person("shubham",40);
// console.log(Person1);


// class Animal{
  
//     constructor(name){
//         this.name=name;
  
//     }
//     speak(){
//         console.log(`${this.name} makes a noise`);

//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} barks `);  //function overrifing,inherit,
//     }
// }

// class Cat extends Animal{
//   constructor(name){
//     super(name);
    
//   }

//   speak(){
//     console.log(`${this.name} makes a noise`);
//   }
// }


class BankAccount{

    #balance=0;  //this is calles a prvate property and it can nit be accesed in outside
    constructor(owner){
        this.owner=owner;
    }
    deposit(amount){
        this.#balance += amount;
        console.log(`${this.owner}  deposited ${amount} current balance: ${this.#balance}`);
    }
}
let BankAccount1 =new BankAccount("kevali");
console.log(BankAccount1);




















