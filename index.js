'use strict'
const names = ["John","Bill","Sam"];
const names1 = ["sd","sdvff"];

console.log("names = "+names);
//spread operator
const allNames = [...names,"Jio",...names1];
// allNames.concat(names);
// allNames.push("df");
// allNames.concat(names1);

console.log("allnames = "+allNames);
if(names){
    const fullName = "sdffdsfasd";
}
//console.log("FuLL name "+fullName);

//arrow functions
const newnames = names.map(name =>name+="dfd");
console.log("newnames = "+newnames);



//template strings

const name = 'Bill';
const age = 34;

const sentence = `My name is ${name} and age is ${age +10}`;
console.log("Sentence == "+sentence);

//ES6 classes
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;


    }
    speak(){
        console.log("I can speak");
    }
}

const p = new Person("df",32);

console.log("p = "+JSON.stringify(p));
p.speak();
