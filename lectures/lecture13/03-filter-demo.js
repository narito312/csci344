/*************/
/* 3. Filter */
/*************/
console.log("\nfilter method of list:");

// original array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter functions:
const isGreaterThan2 = (item) => item > 2; //returns true/false
const isEven = (item) => item % 2 === 0; //returns true/false
const isOdd = (item) => item % 2 === 1; //returns true/false

// The filter "higher order" function applies a filtering function
// to each element of a list (which evaluates to true or false).
// It returns a new list with only those items where filtering function returned true.
const result1 = myNums.filter(isGreaterThan2);
const result2 = myNums.filter(isEven);
const result3 = myNums.filter(isOdd);

console.log(result1);
console.log(result2);
console.log(result3);

const names = ["Larry", "Curly", "Moe", "Walter", "Waldo", "Lester"];

const startsWithL = item => item[0].toLowerCase() === "l";
const result4 = names.filter(startsWithL);
console.log(result4);
// const helloL = item => 'hello' + ' ' + item;
// result4.forEach((item) => console.log('Hello ' + item));

const addHello = (item) => 'Hello ' + item;
const result5 = result4.map(addHello);
console.log(result5);

// CHALLENGE:
// How could you use the filter function to return a list of names
// that start with the letter "L"?
