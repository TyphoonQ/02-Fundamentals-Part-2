/*
// 33
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;


// 34 Functions

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrnageJuice = fruitProcessor(2, 4);
console.log(appleOrnageJuice);

const num = Number('23');


function describeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const location = `${country} has ${population} million people and its capital city is ${capitalCity}.`
    return location;
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);


// 35 Function Decleration vs. Expressions
// Function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);
*/

// 36 Arrow Functions

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

const percentageOfWorld3 = population => (population / 7900) * 100
const percPortugal1 = percentageOfWorld3(10);
const percChina1 = percentageOfWorld3(1441);
const percUSA1 = percentageOfWorld3(332);

console.log(percPortugal1, percChina1, percUSA1);