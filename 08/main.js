/** Object Shorthand */
function getPerson() {
    let name = 'John';
    let age = 25;

    return {
        name,
        age,
        greet() {
            return `Hello, ${this.name}`;
        }
    };
}

console.log(getPerson().greet());

/** Object Destructing */
let person = {
    name: 'Karen',
    age: 32
};

let {name, age} = person;

console.log(name, age);

let data = {
    name: 'Karen',
    age: 32,
    results: ['foo', 'bar'],
    count: 30
}

let {results, count} = data;

console.log(results, count);

function getData({results, count}) {
    console.log(results, count);
}

getData(data);
