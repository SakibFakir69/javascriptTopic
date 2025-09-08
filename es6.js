// ES6 
// this comes outisde global scope 

// let , const 
// let is intdrouce use on es6 let was block scope we only access this value in this scope
/// we can re -assin value but do not re-declre the value 

let a = 10;
{
    let b=20;
    console.log(b);
}
console.log(a);
// output will be 10 , 20 

// const is constant we can not change and re -decalre aslo re use 
// const is block scope variable 


const b=10;
{
    const c =23;
    console.log(c);
}
console.log(b);



// arrow function arrow function introduce us on es6 version 

const arrowFn = (a,b) => a+b;
console.log(arrowFn(1,3) , " arrow function")
// do not have own this in context 



// Destructuring Assignment
// destructuring means breaking down the complex structer

// object destructuring


const infoDB = {
    name:"infoDB",
    time: new Date().toLocaleString(),
    address:{
        city:"dhaka",
        zip:8120,
    }
    ,
    greet:function(){
        console.log("now iam destructuring")
    }
}
// destructer here
const {name, time, address:{city, zip} , greet } = infoDB;
console.log(name, time, city,zip, greet())



// Array Destructuring

const arr = [123,45,79,"sdf,sdf", {name:"arr", age:20}];

const [ first , second , ...others ] = arr;
console.log(first, second , others );



// spread oprator 
// use to expand array or object create new array or object 

const add = [1,2,3,4,5,6,7];
const add2 = [...add,8,9,10]
// create new array with add value and ad some new value 

// for / of

const myArr = [ "apple", "banana", "cherry" ];
for (const fruit of myArr) {
    console.log(fruit);
}
const str="hello";
for(const char of str)
{
    console.log(char)
}


// map set

// map store value on key value pair

const mp = new Map();
mp.set("key",1);
mp.set("key2",2);

if(mp.get("key"))
{
    const x = mp.get("key")
    mp.set( "key",x+1);
}
console.log(mp.values())


// set use to store uniqe value 

const st = new Set();
st.add("sakib");
st.add("sakib2");
st.add("sakib"); /// removed duplicate value

console.log(st.has("sakib"))

console.log(st , st.size , st.delete("sakib"))  
// get set , get size, use for delete 
console.log(st)




// classes

class animal {
    name;
    constructor(name ){
        // create a object bluprint 
        this.name=name;
    
        
    }

    // create a method
    speak(){
        console.log("iam can speak ",this.name)
    }
}
// access this class
const myClass = new  animal("sakib");
myClass.speak() /// access speak method


// promise 
// promise in js take 2 argument , resolved , and reject ,
// and return fuilfil, pending and reject 

const myPromise = new Promise((resolve , reject)=>{

    const inputAge = 25;

    if(inputAge<20)
    {
        reject("need age must be 20 upper ")
    }else{
        resolve("welcome to promise s")
    }





})
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error);
})



// default parameters
function greet(name = "Guest") { return `Hello, ${name}!`; }
console.log(greet());