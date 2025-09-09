
// // oop  ( object orinted programming ) oop have 4 pilars => Abstraction => polimorphism => Encapsulition 
// => inharitance



// class are bluprint or object 
// object are collection of data

// class define blueprint


class createCar {

    constructor(brand, model) {  /// use to create new object 

        this.brand = brand; /// property 
        this.model = model; /// property
    }

    // show car details

    showMyCar() {
        console.log(`My Car name ${this.brand} brand ${this.brand}`)
    }


}


// create object from class
const car1 = new createCar("toyota", "mark2");
console.log(car1.showMyCar()) /// call method that show my car


// 1 => Abstraction 
// abstraction means hidding unnessary details and complex logic just show the featuers 
// like car -> user just manupulate car not engine and other

class Car {
    // create bluprint

    constructor(name, brand) /// initlization object
    {
        this.name = name; /// property
        this.brand = brand; /// property
    }


    // user can start car not view hidden engine logic 
    startCar() {
        // start car method
        console.log("car start......");
        this.#carEngine();
    }

    // carEngine logic 

    #carEngine() {
        console.log("engine started....")

    }


}
const test = new Car("toyta", "me");
test.startCar()


// Encapsulation 
// encapsulation hide , data , properties , do not gave access to outside class 


// make random id genrator

const randomId = () => {
    return Math.floor(Math.random() * 1000);

}
class mybankAccount {
    /// hide , data , properties, do not gave access outside class

    static account = [];


    #addAllacount(balance, name) {
        // private 



    }

    constructor(balance, name) /// initilize object
    {
        this.balance = balance /// access property 
        this.name = name;


    }

    accountOwner() {
        console.log(`The account owner is ${this.name} balance ${this.balance}`)

    }
    accountBalance() {
        console.log(`my account balance ${this.balance}`)
    }
    withdrawAmount(ammount) {

        this.balance = this.balance - ammount;

        console.log(`Withdraw ammount ${ammount} now balance ${this.balance}`)
    }
    depositeAmount(amount) {
        this.balance = this.balance + amount;
        console.log(` Deposite amount ${amount} total balance ${this.balance}`)


    }

    allBankAccount() {
        /// this is a private method that can access on this class . no one
        /// see this hidden complex logic , show only unnessary data 


    }

}

const account = new mybankAccount(100, "sakib fakir")
const account2 = new mybankAccount(100, "sakib faasdkir");
account2.depositeAmount(100)
account.allBankAccount()
account2.accountBalance();





// polymorphism 
// polymorphism are same function and method same but they behavior diffrent 
// same function with diffrent signature 

class Calculator {

    add(...args) {
        // polymorphisim do not have other langause like dobule or more method same name 
        /// we can not decalre 

        const sum = args.reduce((prevValue, currValue, arr) => prevValue + currValue, 0);
        console.log(sum)
    }


}
const ans = new Calculator();
ans.add(1, 2, 3);
const ans2 = new Calculator();
ans2.add(1, 2);


// inharitance
// in js we can get property of  parent class and this property we can use in child class 


class Parent {
    amount = 100;
}
class child extends Parent {
    total = this.amount + 100;

    show() {
        console.log(this.total)
    }
}
const x = new child();
x.show();






// pratices

// Bank Account System


class BankAccount {
    #balance  //// here balance is a private property we can access only inside class 

    constructor(balance, ownerName) { /// create object 
        this.#balance = balance;
        this.ownerName = ownerName;

    }

    // create method

    // deposite
    deposite(amount) {
        this.#balance = this.#balance + amount;
        console.log(` deposite amount ${amount} total balance ${this.#balance}`)

    }
    // withdraw
    withdraw(amount) {
        this.#balance = this.#balance - amount;
        console.log(` withdraw amount ${amount} total balance ${this.#balance}`)


    }
    get showBalance() {
        console.log(`Your balance is ${this.#balance} BDT`);

    }

    // to get balance we need helper method
    _update(amount) {
        this.#balance += amount;
    }

}
// SavingsAccount
// here use inharitence
class SavingsAccount extends BankAccount {


    constructor(intrestRate , balance,ownerName) {
        super(balance,ownerName)
        this.intrestRate = intrestRate;

    }

    // add interest
    addIntrestRate() {
        const rate = (this.intrestRate / 100) * 2;
        this._update(rate);
        // pass interest to procted method than update value

    }

}

const test2 = new BankAccount(100, 'sakib fakir');
test2.deposite(100);
console.log("---- Savings Account ----");
const intrest = new SavingsAccount(23,300,"sakib fakir");
intrest.addIntrestRate();
intrest.showBalance;









class Students{
    // class 

    constructor(name, role ,age) // object create
    {
        this.name=name;
        this.role=role;
        this.age=age;
    }

}
const s1 = new Students("sakib",12,23)







// 

class Car{

    constructor(name, model,engine)
    {
        this.name=name;
        this.model=model;
        this.engine=engine;
    }
    start(){

    }
}

class Electric extends Car{

    startCar(){
        console.log("iam start my motor")
    }
}
class Sport extends Car{

    startCar(){
        console.log("iam start my engin")
    }
}