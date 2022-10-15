console.log("Hello WOrld!");
console.log(typeof "MCN");
console.log(typeof 43);
console.log(typeof true);
console.log(typeof 23.3);

console.log("String operations");

const variable="methun";
console.log(variable.length);
console.log("methun is a good boy".length);
console.log(variable.charAt(5));
console.log(variable.indexOf("m"));
console.log(variable.lastIndexOf("th"));
console.log(variable.slice(2)); // display thun
console.log(variable.slice(2,4)); // dispaly th
console.log(variable.toUpperCase());
console.log(variable.includes("th")); // checks for the word th in the variable
console.log(variable.split("e")); // dispaly m and thun in a seperated manner
console.log(variable.split("")); // dispaly ['m','e','t','h','u','n']
console.log("methun,chakkaravarthi,mcn".split(","));



console.log("Number operations");

const myNumber = 42;
console.log(myNumber); // whole number
const myFloat = 42.523;
const myString = '42';
const myTest = '43.54abc';
console.log(myFloat);
console.log(myNumber === myFloat);
console.log(myString+3);
console.log(Number(myString)+3);
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myTest));
console.log(myFloat.toFixed(1));
console.log( typeof myFloat.toString());
console.log(isNaN(myString)); // Not a Number


console.log("math operations");

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.14));
console.log(Math.ceil(3.14))
console.log(Math.floor(3.14));
console.log(Math.pow(2,4));
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 ) + 1);



console.log("problems: random letter from my name");

const myName = 'methun';
const n=myName.length;
console.log(myName.charAt(Math.random() * n));



console.log("if statements");

let soup = "chicken noodle soup";
let crackers = true;
let reply;
if(soup){
    reply= "here is your order" + ' '+ soup;
}
else if(soup && crackers){
    reply = "here is your order"
}
else{
    reply = "sorry we are out of order";
}
console.log(reply);


console.log("switch statements");

const no = 1;
switch(no){
    case 1:
        console.log("1 is a number");
        break;
    case 2:
        console.log("2 is a number");
        break;
    default:
        console.log("enter the correct option");
}


console.log("ternary operator / conditional operator");

let soup = "Chiken noodle soup";
let customer = false;
let responce = soup ? "yes, we serve soup here" : "sorry, we don't serve soup here";
console.log(responce);
let finalResponce = customer ? "you are not allowed" : soup ? "yes, we serve soup here mam" : "sorry, we don't serve soup here";
console.log(finalResponce);



console.log("user input / input from the user");

alert("Hai, my name is Methun Chakkaravarthi N");
let myBoolean = confirm("Ok === True \n Cancel === False");
console.log(myBoolean);

 let myNam1  = prompt("please enter your name.");
 console.log(myNam1);
let myName  = prompt("please enter your name.");
if (myName){
    console.log(myName.trim().length);
    console.log(myName);
}else{
    console.log("you didn't enter the name");
}


console.log("your first interactive game");
 
const playGame = confirm("shall we play rock, paper or scissors?");
if (playGame){
    let playerChoice =prompt("enter rock, paper, or scissors?");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase(); // here trim takes off the extra spaces entered.
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerOption  = Math.floor(Math.random() * 3 + 1);
            let computer = computerOption === 1 ? "rock" : computerOption === 2 ? "paper" : "scissors";
            if(playerOne === "rock" && computer === "scissors"){
                alert("player wins the game");
            }
            else if(playerOne === "rock" && computer === "paper"){
                alert("computer wins the game");
            }
            else if(playerOne === "rock" && computer === "rock"){
                alert("tie game.");
            }
            if(playerOne === "paper" && computer === "scissors"){
                alert("computer wins the game");
            }
            else if(playerOne === "paper" && computer === "paper"){
                alert("tie game");
            }
            else if(playerOne === "paper" && computer === "rock"){
                alert("palyer wins the game");
            }
            if(playerOne === "scissors" && computer === "scissors"){
                alert("tie game.");
            }
            else if(playerOne === "scissors" && computer === "paper"){
                alert("player wins the game");
            }
            else if(playerOne === "scissors" && computer === "rock"){
                alert("computer wins the game");
            }
        }
        else{
            alert("enter the correct  option!");
        }
    }
    else{
        alert("I guess you changed your mind. Maybe next time.");
    }
}
else{
    alert("Ok, may be next time.");
}



console.log("loops");

let myNumber = 0;
while (myNumber <= 10){
    console.log(myNumber);
    myNumber ++;
}
do{
    myNumber--;
    console.log(myNumber);
}while(myNumber != 0);
for(let i =0 ;i<10;i++){
    console.log(i);
}
let name1 = "methun"
for(let i =0 ; i < name1.length ; i++){
    console.log(name1.charAt(i));
}

let counter = 0 ;
while(true){
    console.log(counter);
    counter ++;
    if(counter >3) break;
}

console.log("functions in javascript");
let name1 = "methun"
console.log(name1.toUpperCase());

function sum(){
    return 2+2;
}
console.log(sum());
function sum(n1 , n2){
    return n1+n2;
}
console.log(sum(1,2));

function sum(n1,n2){
    if(n2 === undefined){
        return n1+n1;
    }
    return n1+n2;
}
console.log(sum(10));

const getmail = function (mail){
    return mail.slice(0,mail.indexOf('@'));
}
console.log(getmail("methun@gmail.com"));

const getmail1 = (mail) =>{
    return mail.slice(0,mail.indexOf('@'));
}
console.log(getmail1("methun@gmail.com"));


console.log("var let and const");

var x=1;
var x = 2;
console.log(x); // no error
const q=1; // local scope - block scope
let w=1; // local scope - block scope
var r=1; // global scope


 

const arr = [];
arr[0] = 1;
arr[1] = "Methun";
arr[2] = true;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length-1]);

arr.push("MCN");
arr.push(0);
arr.pop();
const last = arr.pop();
console.log(last);
arr.unshift(10); // add element to the start of the array
const no_of_element  = arr.unshift(100); // return the number of elements
const first = arr.shift(); // returns the first element of the array and removes it
console.log(arr);
delete arr[1]; // moves an undefined data to the array "Empty"
console.log(arr[1]);
arr[1] = "MCN";
arr.splice(1,1); // (postion,number form that position)
console.log(arr);
arr.splice(1,1,43); // replace the element with this.
console.log(arr);
arr.splice(1,0,"hahaha"); // add new element without replacing 
console.log(arr);


const ar = [1,2,3,4,5]; 
console.log(ar);
const n = ar.slice(2);
console.log(n);
ar.reverse();
console.log(ar);
const s = ar.join('.'); // add . between them
console.log(s);
// const ne = s.split(':');
// console.log(ne);

const a1 = [1,2,3];
const a2 = [4,5,6];
const newarr = a2.concat(a1);
console.log(newarr);
const sp = [...a1,...a2]; // spread operator same like concat use ...
console.log(sp);
const sa = [a1,a2]; // nested array with a1,a2
console.log(sa);

console.log("Objects"); //key-value pairs in curly braces
const data = {name : "methun"};
console.log(data);
console.log(data.name);
const data1 = {name:"methun",
age:19,
hobbies:["eat","sleep","repeat"],
action : function(){
   return  ('my name is methun');
}
};
console.log(data1.action());
const vehicle = {
    wheels:4,
    engine:function(){
        return "duuuur!"
    }
};
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); // display 2 alone
console.log(truck.wheels);
console.log(truck.engine()); // inherit of vehicle
truck.wheels = 10;
console.log(truck);
console.log(vehicle.wheels);

const band = {
    n1:1,
    n2:2,
    n3:3,
    n4:4,
    n5:5
};
band.n6 = 6;
console.log(band);
console.log(Object.keys(band));
console.log(Object.values(band));
delete band.n6;
//for in loop
for(let job in band)
{
    console.log( job +" Equals to "+ band[job]);
}
console.log(band.hasOwnProperty("n3"));
object destructuring 
const {n3:m3 , n4:m4} = band;
console.log(m3 +" "+ m4);
const  {n1,n2,n3,n4,n5} = band; // refer exact same key name
console.log(n1);
console.log(n4);

function val({n1}){
    return n1;
}
console.log(val(band));

console.log("javascript classes");
class pizza 
{
    constructor(nam)
    {
        this.name = nam;
        this.no=100;
    }
    // getgo ()
    // {
    //     return this.no;
    // }
    // setgo (go)
    // {
    //     this.no = go;
    // }
    bake()
    {
        console.log(this.name + " - " + this.no);
    }
}
// const k1 = new pizza();
// k1.bake();
// const k = new pizza('mcn');
// k.bake();
const m1 = new pizza("kam");
console.log(m1.go);
// k1.no = 10;
// console.log(k1.no);
// console.log(k.no);
// read for get and set methods
class mcn extends pizza
{
    constructor(nam)
    {
        super(nam);
        this._gogo = "supper";
    }
}

console.log("javascript object notations");
const obj = {
    name:"methun",
    age:19,
    hello:function(){
        console.log("hello world!");
    }
};
console.log(obj);
console.log(obj.name);
obj.hello();
console.log(typeof obj);
const sendjson = JSON.stringify(obj);
console.log(sendjson);
console.log(typeof sendjson);
console.log(sendjson.name); // undefined
const recevied = JSON.parse(sendjson); // convert back to object
console.log(recevied);
console.log(typeof recevied);

console.log("Errors in javascript and handeling it");
"use strict";
const makeErr = () =>{
    try{
        // const a = "methun";
        // a = "mcn";
        // throw new custom("this is an error");
        throw new Error("this is an error"); // generic one 
    }
    catch(e){
        
        // console.log(e);
         console.error(e);
        // console.warn(e);
        // console.table(e); // props of error
        // console.error(e.stack);
    }
    finally // executes anyway at last
    {
        console.log("finally");
    }
}
makeErr();

// function custom (m)
// {
//     this.m = m;
//     this.name = "methun";
//     this.stack = this.m + this.name;
// }


console.log("DOM  - document object model");
const v1 = document.getElementById("v1");
console.log(v1);
const v2 = document.querySelector("#v2");
console.log(v2);

console.log("Event handlers");
const fun = () =>{
     alert("Hello");
}