//console.log('Hello World');

//console.error('This is error');

//let,const
//const age=30;  // static
//let age=30;  //Dynamic
//age=31; 
//console.log(age)

//DataTypes:String,Number,boolean,null,undefine

const name = "John"  // For String we can use ""and''
const age = 30;
const rating = 4.5;  //there is nothing like desimal value
const isCool = true;
const a = null;  //no value
const b = undefined; // undefine value
let c;

//console.log(typeof c);

//==>Concatenation
//console.log("My name is"+name+  "and i am"+age);

//==>Template String
const hello = `My name is${name}and i am ${age}`;
//console.log(hello);


//==>String Properties and mgs

const s = "Hello World";

//console.log(s.length); // .length means how many character are there
//console.log(s.toLowerCase());0   //small abcd
//console.log(s.toUpperCase());    //big ABCD
//console.log(s.substring(0,5)); // means from first how many character you want to print
//console.log(s.split('')); // each charcter different
//console.log(s.split(',')); //each word different



//==>Arrays:- Variables that store multiple values

const n = new Array(1, 3, 4, 6);

//console.log(n);
const fruits = ['Apples', 'Bananas']  //we can use string,number,true,false
//Arrays always counts starts from 0
// Bananas is number one

//console.log(fruits);
//console.log(fruits[1]);  // output Bananas

fruits[2] = 'Mangoes';  // Add another 
fruits.push('oranges'); // Also for add another
fruits.unshift('stawberries'); // Shift first
fruits.pop(); //remove last one
//console.log(Array.isArray); //for see how many array are there
//console.log(fruits.indexOf('oranges'));
//console.log(fruits);


//const person ={

// firstName: 'Nisha',
//lastName: 'Soni',
// hobbies:['Dance','Sports'],
//address:{
//  street:'23 bhagat ki kothi',
//city:'jodhur',
//state:'Rajasthan'
//}

//}
//console.log(person); // For whole details
//console.log(person.firstName) // For first name output
// You can also add more then one fields
//console.log(person.hobbies[1]); // For Inside the feilds one line
//const{firstName,address:{city}}=person; // If we make Object

//console.log(city);
//person.email='nisha@gmail.com'; // for add in some fields
//console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take one trash',
        isCompleted: true

    },

    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true

    },

    {
        id: 3,
        text: 'Dentist Oppt',
        isCompleted: false

    }
];
//console.log(todos) // is for whole object litreal o/p
//console.log(todos[1].text); // for second row output

//==>Convert to JSON
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON); // for json values
//=============================================================================
//====>LOOPS
//==============================================================================
//==>For
//for (let i = 0; i < 10; i++) {
// console.log(i);
//  console.log(`For Loop Number: ${i}`);
//}

//==>While
//let i=0;
//while(i<10){
//  console.log(`While Loop Number: ${i}`);
//i++;
//}

//for(let i=0; i<todos.length;i++){
//  console.log(todos[i].text);  // this is for looping all text line to line
//}

//for(let todo of todos){
// console.log(todo.text); // this is also for looping text we can also get id only 
// we have to change id instand of text
//}

//==>forEach
//todos.forEach(function(todo){
//  console.log(todo.text)
//});

//==>Map
//const todoText= todos.map(function(todo){
//   return todo.text;
//});
//console.log(todoText);

//==> Filter
//const todoCompleted = todos.filter(function (todo) {
//  return todo.isCompleted===true;   //we can also use map in filter
//this function is soo powerfull
//}).map(function(todo){
//  return todo.text
//});
//console.log(todoCompleted);

//===>If Statements
//const x=20;                 //we can't use ==== bcoz it is similer to datatypes
// if(x===10){
//  console.log('x is 10');
//    }else{
//   console.log('x is not 20');
// }                              //First is String and second is number
//If both are same datatypes then we can run the program
//==>else if
/*const x=20;                 //we can't use ==== bcoz it is similer to datatypes
     if(x===10){
    /   console.log('x is 10');
    }else if(x>10){
          console.log('x is grater then 10');
        }else{
       console.log('x is less then 10');
    }*/

const x = 4;
const y = 10;

/*if(x>5|| y>10){
console.log('x is more then 5 OR y is more then 10'); //it doesn't work bcoz x and y both are smaller then 5 and 10 
*/
const p = 6;     // this method is better then nested 
const q = 11;
/*if(p>5 && q>10){
//console.log('p is more then 5 AND q is more then 10'); 
}*/


/*const m=10;     // Ternery operator ?:
const colour = m>10?'red': 'blue'

//console.log(colour);

switch(colour){   //switch statement
    case 'red':
        console.log('Colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is not red or blue');
        break;
}*/

//==>FUNCTIONS
/*function addNums(num1,num2){
    console.log(num1+num2);
}

addNums(5,4);*/

/*function addNums(num1 = 2,num2 =3){
    console.log(num1+num2);
}

addNums();*/

/*function addNums(num1 = 2,num2 =3){
    return num1+num2;
}

console.log(addNums(5,5)); */

//==>Arrow function

/*const addNums=(num1 = 2,num2 =3)=>{
    return num1+num2;
}

console.log(addNums(5,5));*/

// Ex2 of arrow function
/*const addNums=(num1 = 2,num2 =3)=>    console.log(num1+num2);
addNums(5,5);*/

//Ex3 of Arrow function
/*
const addNums = num1=>num1+5;
console.log(addNums(5));*/
//=========================================================================
//OOPs
//=========================================================================

//Constructor function
/*function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object
const person1 = new person('Nisha', 'Soni', '7-24-1999')
const person2 = new person('Khushi', 'Bhanushali', '1-20-1993') //mm-dd--yy

//console.log(person1);
//console.log(person2);

//If we want only last name of person

console.log(person2.lastName);*/

//Date format
/*function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

//Instantiate object
const person1 = new person('Nisha', 'Soni', '24-7-1999');
const person2 = new person('Khushi', 'Bhanushali', '20-1-1993');

//console.log(person2.dob);

console.log(person2.dob.getFullYear());*/

//Add methods

/*function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }

    this.getFullName = function () {
        return '${this.firstName} ${this.latName()}';

    }
}

//Instantiate object
const person1 = new person('Nisha', 'Soni', '24-7-1999');
const person2 = new person('Khushi', 'BShanushali', '20-1-1993');

console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person1)*/

//==>prototypes

/*function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
       
    }
    person.prototype.getBirthYear=function(){
        return this.dob.getFullYear();
    }


    person.prototype.getFullName = function () {
        return '${this.firstName} ${this.latName()}';

    }
}

//Instantiate object
const person1 = new person('Nisha', 'Soni', '24-7-1999');
const person2 = new person('Khushi', 'BShanushali', '20-1-1993');

console.log(person2.getFullName());
console.log(person1);*/

//==>CLASS
//Class are easy to write
// but you dont have to write
/*class person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);


    }
    getBirthYear() {
        return this.dob.getFullYear();
    }


    getFullName() {
        return '${this.firstName} ${this.latName()}';

    }
}

//Instantiate object
const person1 = new person('Nisha', 'Soni', '24-7-1999');
const person2 = new person('Khushi', 'BShanushali', '20-1-1993');

console.log(person2.getFullName());
console.log(person1);
*/
//============================================================================

//==>Single element

//console.log(document.getElementById('my-form'));

/*const form = document.getElementById('my-form');
console.log(form);*/
/*
console.log(document.getElementById('my-form'));
console.log(document.querySelector('my-form'));// if you want to select container then type container instade of my-form
console.log(document.querySelector('h1')); // if there are soo many h1 then it will take only first one
*/
//Let me uncomment items from index.html

//==> Multiple elements

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

/*
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));*/

//==========================================================================
//DOM
//==========================================================================
const ul = document.querySelector('.items');

//ul.remove();  //removes all items
//ul.lastElementChild.remove(); // it removes last one
//ul.firstElementChild.textContent = 'Hello'; // it replaced item to hello
//ul.children[1].innerText = 'Brad'; // it replace item2 to brad
//ul.lastElementChild.innerHTML = '<h1>HELLO</h1>'

//Button :-
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // if we write this then click will stable in console
    //console.log('click'); // when you click the sybmit button if we write only this then in console click come and go
    // console.log(e.target);//to get attributes
    // console.log(e.target.name);
    document.querySelector('#my-form').style.background = '#ccc'; //#ccc is for dark gray colour
    // when you click on submit the whole form terns ito gray colour

    document.querySelector('body').classList.add('bg-dark');//the whole background turns dark accpt form
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});*/
//==> mouseover &mouseout:-
// mouseover is the error touch in submit then background will dark
// mouseout is the error moves and background will light
//btn.addEventListener('mouseover', (e) => {
//  e.preventDefault(); // if we write this then click will stable in console
// console.log('click'); // when you click the sybmit button if we write only this then in console click come and go
// console.log(e.target);//to get attributes
// console.log(e.target.name);
// document.querySelector('#my-form').style.background = '#ccc'; //#ccc is for dark gray colour
// when you click on submit the whole form terns ito gray colour

//document.querySelector('body').classList.add('bg-dark');//the whole background turns dark accpt form
//document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//});

//Let me comment items again
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mgs = document.querySelector('.mgs');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    // console.log(nameInput.value); // without value that name will not output 
    // now i dont want to submit unless i dont fill all fields:-

    if (nameInput.vaue === '' || emailInput.value === '') {
        //alert('please enter feilds')// instad alert we can do this
        mgs.classList.add('error');
        mgs.innerHTML = 'Please Enter All Fields';

        setTimeout(() => mgs.remove(), 3000); // milisecond


    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))

        userList.appendChild(li);

        //Clear fields
        nameInput.value='';
        emailInput.value='';

    }

}