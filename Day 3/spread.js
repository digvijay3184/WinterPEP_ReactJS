function calculateDiscount(price, discount = 10) {
    return price - (price * (discount / 100));
}


function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

function logArguments(...args) {
    console.log(args);
}

function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}


function sum(a, b, c) {
    return a + b + c;
}


const numbers = [1, 2, 3];
const total = sum(...numbers);
console.log(`Total sum: ${total}`);

function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}
console.log(calculateDiscount(100)); 
console.log(mergeArrays([1, 2], [3, 4])); 
logArguments(1, 'test', true); 
console.log(createMessage("Hello", "Alice", "Bob")); 
console.log(createUserProfile("john_doe",undefined,"India")); 