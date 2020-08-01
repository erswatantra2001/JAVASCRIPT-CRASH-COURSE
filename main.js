
//declaring variables

const name = "rishabh"; // cannot  reassign value
let age = 19; //can reassign value

///concatenation

console.log(`my name is ${name} and my age is ${age}`)


//string methods
//property doesn't have parenthisis, if it has parenthisis then it is a method

console.log(name.length);   //property
console.log(name.toUpperCase());
console.log(name.substring(0,3));
console.log(name.split(""));

//arrays - variables that hold multiple valuesṇ

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//or

const fruits = ['apples', 'oranges', 'pears']
fruits[3] = 'grapes';
fruits.push('mangoes'); //adds at last position, index -1
fruits.unshift('strawberries'); // adds at  
fruits.pop()
fruits[1] = "peach"; //rewrites existing value
console.log(fruits);
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('peach'))

//object literal - basically key value pairs

const person = {
    firstName: "Rishabh",
    lastName: "Gupta",
    age: 19,
    hobbies: ['offendng', 'dark jokes', 'music'],
    address:{
        building: "9/92",
        area: "sector-3, rajendra nagar, sahibabad",
        city: "ghaziabad",
        state: "uttar pradesh"
    } // object can contain further objects (dictionary inside a dictionary)
}
console.log(person);

//to access a perticular value use a dot(.) syntax

console.log(person.firstName, person.lastName);
console.log(person.address);
console.log(person.hobbies[1]);

//  destructuring - if we want to create variables for object literal 

const {firstName, lastName,  address: {city}} = person;
console.log(city); //part of ES6, new feature

//we can also add a property

person.email = 'rishabhbpit@gmail.com';
console.log(person)

// array of obbjects    

const todos= [
    {
        id: 1,
        text: 'take out trash',
        iscompleted : true
    },
    {
        id: 2,
        text: 'meeting with boss',
        iscompleted : false
    },
    {
        id: 3,
        text: 'dentist appointment',
        iscompleted : true
    }
];
console.log(todos)
console.log(todos[1].text)

//json - data format, used in api to receive and send  (synatx is similar to array but double quotes around keys and values- single quotes will give error)

const todoJSON = JSON.stringify(todos); // to convert array into JSON inside script
console.log(todoJSON);

//for loops

for(let i=0; i <= 10; i++){
    console.log(`for loop number: ${i}`)
}

console.log("") // printing a line break

//while loop
let i=0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}

for(let todo of todos){
    console.log(todo)
}

//high order array method - reccommended to do iterations in an array

//foreach -just loops through them
//map - allows us to create a new array
//filter - allow us to create a new array based on a condition

todos.forEach(function(todo){
    console.log(todo.text);
})  // takes function as a parameter

const todotext = todos.map(function(todo){
    return todo.text //todo is a variable that we assign
})

console.log(todotext);

const todocompleted = todos.filter(function(todo){
    return todo.iscompleted === true;
});
console.log(todocompleted);

const todocompletedtext = todos.filter(function(todo){
    return todo.iscompleted === true;
}).map(function(todi){
    return todi.text;
})
console.log(todocompletedtext);

// conditionals

const x = 5;
if(x === 10){
    console.log("x is 10")
} 
else if(x > 10){
    console.log('x is greater than 10')
}
else{
    console.log("x is less than  10")
}

// multiple conditions
const z = 6;
const y = 11;
if(z >5 && y >10){
    console.log("z is greater than 5 or y in greater than 10")
} 
 //ternary operator - short hand if statement used to assign variables based on a condition

 const a = 10;
 const color = a < 10 ? "red" : "blue";
// if "a" is greather than 10 THEN(?) red ELSE(:) blue
 console.log(color)

 // switches - another way to evaluate a condition

 switch(color){
    case "red": 
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is neither blue nor red")
 }

//functions 

function addNums(num1 = 1, num2 = 2){
    return (num1 + num2);
}

console.log(addNums(4,4));

// arrow functions

const addNum = (num3 = 1, num4 =1) => {
    return(num3 + num4);
}

console.log(addNum(5,6))

//=== (cleaning things up)

const addNuma = (num3 = 1, num4 = 1) => (num3 + num4);

console.log(addNuma())


//object oriented programming

//constructor function should start with capital letter
function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear(); // we can add methods(functions) to t\Person object
    };
    this.FullName = function(){
        return `${this.firstname} ${this.lastname}`
    };
};

//instantiate object
const person1 = new Person('rishabh', 'gupta', '12-03-2001');
console.log(person1);
const person2 = new Person('mary', 'smith', '11-06-2003');
console.log(person2.dob);

const person3 = new Person("john", "doe", "03-06-1976")
 console.log(person3.getBirthYear());
console.log(person1.FullName());

//protypes - another method (function not added in object)

function Person0(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
};

Person0.prototype.getBirthYear = function(){
    return this.dob.getFullYear();    
};
Person0.prototype.FullName = function(){
    return `${this.firstname} ${this.lastname}`
};
 console.log(person2.FullName()) // features till ES5

// from ES6

//class -  a cleaenr way to represent above function objects
class Personn{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    };

    getBirthYear() {
        return this.dob.getFullYear();
    };

    FullName() {
        return `${this.firstname} ${this.lastname}`;
    };
};

const person4 = new Personn("anything", "sharma", "12-19-2020")
console.log(person4.FullName());

//DOM

console.log(window);
// alert("this is an alert");

//selecting this from dom

// single element selector
const form = document.getElementById('my-form');
console.log(form)
console.log(document.querySelector('.container'))

//multiple element selector
const items = document.querySelectorAll('.item'); //we can run array method on this, recommended

console.log(document.getElementsByClassName('item')); // can't use array methods, have to manually convert into array

items.forEach((item) => console.log(item));

//manipulating DOM

const ul = document.querySelector('.items');
//ul.remove();-> removes entire list
// ul.lastElementChild.remove();
console.log(ul)
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>"

//styling
const btn = document.querySelector('.btn');
btn.style.background = "red";

//events

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background="yellow";
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
});
        








1
