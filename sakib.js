

// Variables (var, let, const)

//  what is variable , variable are space where we put data or store data 
/// in computer memory space 
// in js there 3 types are variable they are  var , let , const 

var x = 10;
let y  = 20;
const z = 30;
/// var 
/// var is function scope , we can re assin and re declare 
var x = 10;
x=20;
console.log(x);
// and var are hosited meann when execution context run it check consle.log() it get undefine 
// we got undefine in console , like we first get value than we decalre they value 


// let 
// let are block scope only we can access inside scope , let  can re assin not re-deaclre 
y=20;
console.log(y);
// let aslo histed but we got reference error because if we access let value and got undfine so throw error
// because we access valu before initialize 

/// const 
// const is constant mean we can not change this value and const are block scope and we can not re assin and redecalre 



// DATA TYPES


// what is data type ? how use it 

// data type are we value we store in memory space 
//// data type are => number , string , boolean , object , bigIbt , undefine , null 

let str =String("how are you");
let num = Number(1000);
let big = BigInt(10000000000000000000000000000000) //// we can store big value here
let isActive = false 
// null mean nothing 
// undefine declare variable but not initalize value 


// Operators (arithmetic, comparison, logical, assignment)

// oprator use for opration in two or more variable 
// arithmetic -> + , - , / , ** 

let ans = 100 * 100;
console.log(ans);
let sum = 10 + 10;
console.log(sum);
let div = 10 /2;
console.log(div);

// comparison
// this oprator use for conditional check 
if(18>=18)
{
    console.log("you can vote");
}else{
    console.log("You have no access this machine")
}

// logical oprator use for logical operation like and or not

// and check both value are true are false if both true retun right 

const and = true && "true" ;
console.log(and );
// or -> check both value and return true if false return first value

let or = false | false;
console.log(or);

// not -> not cnvrt true into false and  false into true
let not = !true;
console.log(not)




// Control Flow

// if/else
//  if use for condition check and return true or false 

let age = 10 ; /// here we input our age 

if(age>=18)
{
    console.log("you can vote ")
}else{
    console.log("you can not gave vote ")
}

// switch 

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


// loop use to repat and itarate 
// in js have , for loop , while loop , do while loop


// for loop 
// for( initilazation , condition , inc/dec)

for(let i=0; i<10; i++)
{
    console.log(i)
}

// while loop 
// run until condition false

let n = 10;
while(n!=0)
{
    n--;
    console.log(n);
}
// do while
// do run then check


let value = 10;

do{
    console.log(value)
    value++;
    if(value==12)
    {
        break;
    }

}while(true)

    // helper in loop in and or 

let arr = [1,4,3,4,45];
for(const num in arr)
{
    console.log(num)
}
// off gave value 
// in gave key , i think in most usefull in object and of use full in aray 


//  what is function  
// function are re usable building block in all programming


//  Function declaration vs expression

const add = (a,b)=>{
    return a+b;
    // this are function declaration 
}
// function execption 
const hello = function(name){
    console.log("hi",name)
}
hello("sakib");

// arrow function decalre with => arrow 
// moving variable and function top scope  of their code execution


// array  
// array are collection of data store 
// 
// array method , length, indexOf  , slice , push , pop , shift , unshift,
// array start with zero index
const arrFruits = ["mango","apple","pinapple"];
// know we access arrFruits 0 index , we can use , At , indexOf , slice , at 
console.log(arrFruits.indexOf("applesd"));
// add new element to array , spread oprator , contact ,push ,  unshift
// push insert to last in array , unshift to first in array 

// create new array 

const newArr = [...arrFruits, "mango2","pinaaple2"];
console.log(newArr , " spread oprator ")
const concatArr = arrFruits.concat("sakib");
console.log(concatArr , " contact array ");
// push use to add last in  array 
arrFruits.push("iam in last add");
console.log(arrFruits, " iam add on last ")
// removed last add from array use pop 
arrFruits.pop();
console.log(arrFruits , " iam remove last add from array");

// now i want to add first in array 
arrFruits.unshift("sakib iam first");
console.log(arrFruits, " iam add unshift");
// now removed first element
arrFruits.shift();
console.log(arrFruits , " hey iam pop ")

const from = Array.from("sakib fakir" );
console.log(from.join(""))
// array.isArrays check this value are array or not
    

const strArr = ["sakib","rakib",23];

const ev = strArr.every((item)=> typeof item==="string" );
// typeof check type
const sm = strArr.some((item)=> typeof item ==="string")
console.log(ev , ' every test');
console.log(sm, ' sm test');

const fl = strArr.filter((item)=> typeof item==="string");
console.log(fl);
// filter based on stirng value in array 
// and create new  array

const searh = strArr.includes("sakib");
const f = strArr.find(item => item==="rakib");
// includes return true or false
// find return undefine or valuel 
console.log(searh, f)

