
// Anonymous function
const x = function (a, b) {
    return a * b;
    // return arguments.length
}
// Named function
function product(a, b) {
    return a * b;
}

z = x(10, 10)
console.log(z)

for (var /* let */  i = 0; i < 3; i++) {
    setTimeout(_ => console.log(i), 10);
  }
// var : ko co block scope nen in ra so 3 3 lan, trong khoang 10ms do i da chay tang len 3 -> (3) 3
// let:  co block scope nen i se dc tao moi va ton tai trong tung vong lap --> 0 1 2   

/* push --> add, end
pop --> remove, end
unshift --> add, start
shift --> remove, start */
const cart = ['apple', 'orange']; 
cart.push('pear'); 
cart.pop()
cart.unshift('banana')
cart.shift()
console.log(cart)

//concat : ko lam thay doi mang ban dau

// Function() Constructor
const myFunc = new Function('a', 'b', 'return a * b')
console.log(myFunc(5, 6))

const a = (a, b) => a * b
const a2 = (a, b) => { return a * b }
console.log('a1= ' + a(4, 5) + ', a2= ' + a2(10, 10))

// Function Rest Parameter
const sum = function (...args) {
    let sum = 0
    for (let arg of args) {
        sum += arg;
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5, 6))
console.log(findMax(1, 3, 100, -3, 40, -60))

function findMax() {
    max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] >= max) {
            max = arguments[i]
        }
    }
    return max
}

// apply() Method
/* The call() method takes arguments separately.
The apply() method takes arguments as an array. */
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " " + city + " " + country
    }
}

const person2 = {
    firstName: "David",
    lastName: "Nguyen"
}

console.log(person.fullName.apply(person2)) // --> David Nguyen undefined undefined

console.log(person.fullName.apply(person2, ['Ha Noi', 'Viet Nam'])) // --> David Nguyen Ha Noi Viet Nam

console.log(person.fullName.call(person2, "Oslo", "Norway")) // --> David Nguyen Oslo Norway

let fullName1 = person.fullName.bind(person2)
console.log(fullName1())


