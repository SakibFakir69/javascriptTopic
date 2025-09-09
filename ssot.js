


// keep all data in one place and all take data from here

// keep safe from duplicate data and conflict


export const  data = {

    account:{
        name:"sakib",
        age:20,
        role:32,
    },
    skill:['Js'],
    bankBalance:{
        BDT:100,
    }

}
console.log(data.account.age);



// ssot example

const data2={
    user:[{name:'sakib' , role:12}],
    user2:[{name:'saki2b' , role:12}],
}
console.log(data2.user[0].name)