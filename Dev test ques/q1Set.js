const mySet = new Set();
mySet.add(1);
console.log('size:' , mySet.size); //output = size: 1
mySet.add(1);
console.log('size:' , mySet.size); //output = size: 1
mySet.add('a');
console.log('size:' , mySet.size); //output = size: 2
mySet.add('a');
console.log('size:' , mySet.size); //output = size: 2
mySet.add(undefined);
console.log('size:' , mySet.size); //output = size: 3
mySet.add(undefined);
console.log('size:' , mySet.size); //output = size: 3
mySet.add({prop:true});
console.log('size:' , mySet.size); //output = size: 4
mySet.add({prop:true});
console.log('size:' , mySet.size); //output = size: 5
console.log(mySet);

// ---------------------------------------------------------------------------------------
//copied from mdn

const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

//------------------------------------------------------------------------------------------
//More explaination
//ques
/*declare a new set*/
var items = new Set()

/*add an array by declaring as array type*/
var arr = [1,2,3,4];
items.add(arr);

/*print items*/
console.log(items); // Set {[1, 2, 3, 4]}

/*add an array directly as argument*/
items.add([5,6,7,8]);

/*print items*/
console.log(items); // Set {[1, 2, 3, 4], [5, 6, 7, 8]}

/*print type of items stored in Set*/
for (let item of items) console.log(typeof item); //object, object

/*check if item has array we declared as array type*/
console.log(items.has(arr)); // true

/*Now, check if item has array we added through arguments*/
console.log(items.has([5,6,7,8])); //false

/*Now, add same array again via argument*/
items.add([1,2,3,4]);

/*Set has duplicate items*/
console.log(items); // Set {[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4]}
//Why it is returning false at items.has([5,6,7,8])?
//Ans :- Array comparision does not compare values it compares references so it is returning false. [1] === [1] will return false always.
//Why it is allowing duplicate values? I thought "A set is in an ordered list of values that cannot contain duplicates"
//Ans:- The Set object lets you store unique values of any type, whether primitive values or object references.
// you are passing new object not reference so it is allowing to add duplicate. which is actually visually similar but reference are different.
//How to access array added by items.add([5,6,7,8])?
//Ans:- You've to create a variable and add the variable to the set. Then this variable can be used to check if set has that array or not.

