# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by type coercion. When adding a number and a string, JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition.

## Bug
The `foo` function in `bug.js` attempts to add two values: a number and a string.  JavaScript's loose typing causes the number to be coerced into a string, resulting in concatenation rather than addition.

## Solution
The `bugSolution.js` file provides a corrected version that explicitly converts the inputs to numbers before performing the addition. This avoids the implicit type coercion and ensures accurate numerical results.

## How to run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Run the JavaScript code using Node.js or a browser's developer console.  Observe the difference in output between the original buggy code and the corrected solution.