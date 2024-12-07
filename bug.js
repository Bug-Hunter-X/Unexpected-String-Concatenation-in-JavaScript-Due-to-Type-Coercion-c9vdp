function foo(a,b){    return a+b;}
console.log(foo(10, '20')); // Output: 1020
This is wrong, it should be 30. The reason for this is that JavaScript automatically converts the number 10 to a string and then concatenates them together.