//he function* declaration (function keyword followed by an asterisk) defines a generator function, 
//which returns a Generator object.
function* gen1(){
    console.log(yield 1);
    console.log(yield 2);
    console.log(yield 3);
}

const iterator = gen1();

console.log(iterator.next('a').value);
console.log(iterator.next('b').value);
console.log(iterator.next('c').value);

//output of above code
// 1
// b
// 2
// c
// 3

// function* myGenFunc(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// var myGenObj = new myGenFunc;
// console.log(myGenObj.next().value); //output =  myGenFunc is not a constructor


//***********************************************************************************/
// More examples
// function* generator(i) {
//     yield i;
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value);
//   // expected output: 10
  
//   console.log(gen.next().value);
//   // expected output: 20

// simple example
// function* idMaker() {
//     var index = 0;
//     while (true)
//       yield index++;
//   }
  
//   var gen = idMaker();
  
//   console.log(gen.next().value); // 0
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value); // 3

// example with yield*
// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
//   }
  
//   function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
//   }
  
//   var gen = generator(10);
  
//   console.log(gen.next().value); // 10
//   console.log(gen.next().value); // 11
//   console.log(gen.next().value); // 12
//   console.log(gen.next().value); // 13
//   console.log(gen.next().value); // 20

// passing aruments into generators
// function* logGenerator() {
//     console.log(0);
//     console.log(1, yield);
//     console.log(2, yield);
//     console.log(3, yield);
//   }
  
//   var gen = logGenerator();
  
//   // the first call of next executes from the start of the function
//   // until the first yield statement
//   gen.next();             // 0
//   // gen.next();          // 1 undefined
//   gen.next('pretzel');    // 1 pretzel
//   gen.next('california'); // 2 california
//   gen.next('mayonnaise'); // 3 mayonnaise
  
  