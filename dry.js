
// dry -> do not repated your self


// exmpale write a function that gave ans first do normal way than use dry 


// 1
let height = 10;
let width = 10;
let ans = height * width;
console.log(ans)



// 2
let height2 = 10;
let width2 = 10;
let ans2 = height2 * width2;
console.log(ans2)


// here exmpale we repated same example twice , but here we can add dry princple
// so we create a function that do this job 

const genrateArea = (height, width) => {

    let ans = height * width;
    return ans;
}
const test = genrateArea(1, 2);
console.log(test)
const test2 = genrateArea(1, 23);
console.log(test2)

// incrase code readablility , and easy to maintance 



// WET ( we enjoy typeing ) -> to -> dry -> do not repat your self

function userInput(role) {

    if (role == "admin") {
        return "approved"
    } else if (role === "user") {
        return "not approved"
    } else if (role != "user") {
        return "not approved"
    } else {
        return "not valid"
    }



}
const myRole = userInput("admin");
console.log(myRole)

// here implement role dry -> 
// if we can use dry -> we need repeat for user and admin and other 

// convrt WET to dry -> 

// WET
let count = 0;

const inc = () => {
    count++;
}
const dec = () => {
    count--;
}
// here  we created increment and decrement function for one daata upadte
// but we can improved , just just do int one function 

const updateCounter = (action) => {

    if (action === "inc") {
        count++;
    } else if (action === "dec") {
        count--;
    } else if (action === "reset") {
        count = 0;
    } else {
        console.log("Invalid action");
    }
    console.log("Current count:", count);

}
console.log(count)
updateCounter("inc");
updateCounter("inc");
console.log(count)
updateCounter("reset");




// make calculator 

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a + b;
}
const div = (a, b) => {
    return a / b;
}
const mul = (a, b) => {
    return a + b;
}

// this is wet -> we enjoy typeing

// now do dry


const callMe = (a, b, opration) => {

    switch (a, b, opration) {
        
        case "add":
            console.log("add " ,+a - b);
            break;
        case "mul":
            console.log( "sub " , a * b);
        case "div":
            console.log( " div ",a / b);;
        default:
            console.log("not founed");

    }

}
callMe(1,2, "sub")





const users = [
  { name: "Sakib", balance: 100 },
  { name: "Rahim", balance: 200 }
];
// gave 50 bdt all user use dry 


// wet  -> so user for loop to get index
// then access balance object and add

const addBDT = (userList)=>{

    for(let i=0; i<userList.length; i++)
    {
        userList[i].balance+=50;
    }
    return userList;

}
const output = addBDT(users);
console.log(output);


// map use  -> transfrom each element from array and return new array 

const easyWay = (users) =>{

    const result = users.map((user)=> ({
         name:user.name,
        balance:user.balance
       
    }));
    return result;

}
const output2 = easyWay(users);
console.log(output2)