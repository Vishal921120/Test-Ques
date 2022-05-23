// eval() is a function property of the global object.

// The argument of the eval() function is a string. 
// If the string represents an expression, eval() evaluates the expression. 
// If the argument represents one or more JavaScript statements, eval() evaluates the statements. 
// Do not call eval() to evaluate an arithmetic expression; 
// JavaScript evaluates arithmetic expressions automatically.


// var grand_total = eval("10*10+5");
// console.log(grand_total) // output 105

// console.log(eval('2 + 2'));
// // expected output: 4

// console.log(eval(new String('2 + 2')));
// // expected output: 2 + 2

// console.log(eval('2 + 2') === eval('4'));
// // expected output: true

// console.log(eval('2 + 2') === eval(new String('2 + 2')));
// // expected output: false

// const expression = new String('2 + 2');
// eval(expression.toString());            // returns 4

function test() {
    const x = 2, y = 4;
    // Direct call, uses local scope
    console.log(eval('x + y')); // Result is 6
    // Indirect call using the comma operator to return eval
    console.log((0, eval)('x + y')); // Uses global scope, throws because x is undefined
    // Indirect call using a variable to store and return eval
    const geval = eval;
    console.log(geval('x + y')); // Uses global scope, throws because x is undefined
  }

  test();
