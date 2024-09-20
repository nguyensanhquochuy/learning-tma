/////// ES6 

//block scope
/* for (let i = 0; i < 10; i++) {
    console.log(i)
}

const todoList = ['Di hoc', "choi"];

console.log(todoList); */

/* function person(name, age) {
    const salary = 'Salary';
    return {
        name,   // Property Shorthand
        age,    
        // Method property
        getName() {
            return this.name + " " + this.age
        },
        [`${salary}of${name}`]: 20000 // Computed property key
    }
}
console.log(person('David', 22)) */

// Rest
/* function getNameES6(name = 'Sam', age =22, ...rest) {
    console.log(name + " " + age)
    console.log(rest)
}
getNameES6('Hao', 20, "IT",222, 'a') */


// Spread 
/* const person = {
    name: 'Hao',
    age: 10
}

const worker = {
    worker: 'worker',
    ...person
}

const todoList = ['Di hoc', 'Di lam'];
const todoListmore = ['Di choi', 'Di hop lop', ...todoList]

console.log(todoListmore)
console.log(worker)

// Destructuring
const [first, second] = todoList
console.log({
    first,
    second
}) */

//Class

class person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    getJob() {
        console.log(`Cong viec: ${this.job} `)
    }
}

class worker extends person {
    constructor(name, age, job) {
        super(name, age),
        this.job = job
    }
}

const worker1 = new worker('Hao', 22, 'IT');
console.log(worker1)
console.log(worker1.getJob());


/////// ES5
/* var first_name = "David"; // global scope

//functional scope
function getName() {
    var last_name = "Nguyen";
    return first_name + " " + last_name;
}

console.log(getName()) */

/* function person(name, age) {
    return {
        name: name,
        age: age,
        getName: function () {
            return this.name + " " + this.age
        }
    }
} */
// console.log(person('David', 22).getName())