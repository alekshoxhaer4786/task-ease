/* 
   Filename: complex_code.js
   Content: Complex JavaScript code showcasing various functionalities and techniques
   Description: This code performs a complex task using multiple functions and utilizes advanced JavaScript concepts such as generators, async/await, classes, closures, etc.
*/

// Define a generator function that prints Fibonacci sequence up to the specified limit
function* fibonacci(limit) {
  let prev = 0, curr = 1;
  yield prev;
  yield curr;

  while (curr <= limit) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
    yield curr;
  }
}

// Create a closure to add numbers with a specific constant value
function addWithConstant(constant) {
  return function(num) {
    return num + constant;
  };
}

// Define an asynchronous function that waits for a specific time and resolves with the input
async function waitAndReturn(input) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return input;
}

// Implement a class representing a Shape and its properties
class Shape {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }

  getPerimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

// Define an object array consisting of different shapes
const shapes = [
  new Shape('Triangle', [3, 4, 5]),
  new Shape('Square', [4, 4, 4, 4]),
  new Shape('Pentagon', [5, 5, 5, 5, 5])
];

// Create an array of summed perimeters of all shapes
const perimeters = shapes.map((shape) => shape.getPerimeter());

// Implement an async function to handle the array of summed perimeters
async function handlePerimeters() {
  try {
    const result = await Promise.all(perimeters.map(waitAndReturn));
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Call the complex code to execute
handlePerimeters();