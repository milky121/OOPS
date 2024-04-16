// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 95,
// };

// const stu2 = {
//     name: "dam",
//     age: 55,
//     marks: 35,
// };

// const stu3 = {
//     name: "am",
//     age: 65,
//     marks: 85,
// };



let arr = [1,2,3];
arr.sayHello = () => {
    console.log("hello!, i am arr");
};
//   constructors - does not return anything
function Maker(name, age) {
    
        this.name = name;
        this.age = age;
}
  Maker.prototype.talk = function() {
    console.log(`hi, my name is ${this.name}`);
  };
let p1 = new Maker("adam", 25);
let p2 = new Maker("eve",67); 


// inheritance

class Person{
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi,i am $(this.name)`);
    }
}

class Student extends Person {
 constructor(name, age, marks) {
    super(name, age);
    this.marks= marks;
 }
}

class teacher extends Person{
    constructor(name, age, marks) {
        super(name, age);
        this.subject= subject;
     }
}