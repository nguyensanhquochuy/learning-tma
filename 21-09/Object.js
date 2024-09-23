
function User(firstName, lastName, age) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.getName = () => {
            return `${this.firstName} ${this.lastName}`
        }
}

// Object prototype

User.prototype.className = 'F8'
User.prototype.getClassName = function () {
    return this.className
}

let user1 = new User('David', 'Nguyen', 30)
let user2 = new User('Lisa', 'Nguyen', 25)

console.log(user1.getName())
console.log(user2)
console.log(user1.getClassName())

// Object method

console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))

for (const [pro, val] of Object.entries(user1)) {
    console.log(`${pro}: ${val}`)
}

// covert oject -> map

map = new Map(Object.entries(user1))
console.log(map);

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];
console.log(Object.fromEntries(fruits))

const fruits2 = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];
function filter({ quantity }) {
    return quantity > 200 ? 'ok' : 'low'
}

console.log(Object.groupBy(fruits2, filter));

// Object Properties
// writable : true      // Property value can be changed
// enumerable : true    // Property can be enumerated
// configurable : true  // Property can be reconfigured

Object.defineProperty(user1, 'address', { value: 'Nguyen Thi Dinh' })

Object.defineProperty(user1, 'firstName', { value: 'Hao' })
console.log(user1.address, user1.firstName)


Object.defineProperty(user1, "language", { enumerable: false });

// Get all Properties
console.log(Object.getOwnPropertyNames(user1));

const obj = {
    counter: 0
}

Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0
    }
})
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++
    }
})
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--
    }
})
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value
    }
})
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter-=value
    }
})

obj.increment
obj.increment
obj.decrement
obj.reset
obj.add = 5
obj.subtract = 2

// Object.preventExtensions(obj);
obj.color = 'Red'
obj.func = function (){
    console.log('func')
}
obj.func()


console.log(Object.isExtensible(obj))

// Object.seal(obj)
// delete obj.color;
console.log(obj)