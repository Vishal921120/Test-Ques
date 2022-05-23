// The try...catch...finally statements combo handles errors without stopping JavaScript.
// The try statement defines the code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.
// Both catch and finally are optional, but you must use one of them.


// const arr =[];
// try {
//     arr.push('try');
//     throw new Errow();
// } catch (e) {
//     arr.push('catch');
// } finally {
//     arr.push('finally');
// };
// console.log(arr); // output [ 'try', 'catch', 'finally' ]


const arr =[];
try {
    arr.push();
    throw new Errow(); // here we can define our error to be printed
} catch (e) {
    arr.push('Error = ' + e );
} finally {
    arr.push('finally');
};
console.log(arr); // output [ 'Error = ReferenceError: Errow is not defined', 'finally' ]


//=============================================================================================
// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Statements</h1>
// <h2>The try...catch Statements</h2>

// <p id="demo"></p>

// This example has a typo in the try block. Alert is misspelled.
// The catch block catches the error and executes the code to handle it:

// <script>
// try {
//   adddalert("Welcome guest!")
// }
// catch(err) {
//   document.getElementById("demo").innerHTML = err.message
// }

{/* //output
JavaScript Statements
The try...catch Statements
adddalert is not defined */}
//</script>

// </body>
// </html>


//=========================================================================
// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Statements</h1>
// <h2>The throw Statement</h2>

// <p>Please input a number between 5 and 10:</p>

// <input id="demo" type="text">
// <button type="button" onclick="myFunction()">Test Input</button>
// <p id="message"></p>

{/* <script>
function myFunction() {
  const message = document.getElementById("message");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10)   throw "too high";
    if(x < 5)  throw "too low";
  }
  catch(err) {
    message.innerHTML = "Input " + err;
  }
}
</script>

</body>
</html> */}



