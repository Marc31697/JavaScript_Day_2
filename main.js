//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printInfo(){
    console.log(`person3's favorite pizza types are: ${person3.pizza}
    person3's preferences on tacos are: ${person3.tacos}
    person3's preferred burgers are: ${person3.burgers}
    person3's preferred ice cream flavors are: ${person3.ice_cream}
    person3's view on shakes are: ${person3.shakes[0].oberwise} from oberwise
    person3's view on shakes are: ${person3.shakes[0].dunkin} from dunkin
    person3's view on shakes are: ${person3.shakes[0].culvers} from culvers
    person3's view on shakes are: ${person3.shakes[0].mcDonalds} from mcDonalds
    person3's view on shakes are: ${person3.shakes[0].cupids_candies} from cupids_candies`)
}

printInfo()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor( name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () =>{
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    count_up = ( () => {
        console.log('Test')
        return function () {return this.age++}
    }) ()
}

let Shay = new Person('Shay', 24)
let Marc = new Person('Marc', 24)
console.log(Shay.printInfo())
console.log(Marc.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordSize = (str) => {
    return new Promise( (resolve, reject) =>{
        if(str.length > 10){
            resolve(true)
        } else{
            reject(false)
        }
    })
}

wordSize('pedestrians')

.then( (result)=>{
    console.log('Big word')
})

.catch( (error)=>{
    console.log('Small Number')
})