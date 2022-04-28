// "use strict"
const obj = {
    prop : 1
}
console.log(obj.prop); //output = 1

Object.defineProperty(obj , 'prop' ,{
    writable :false , // because of this we cannot change the value 2 
    value : 2
})

console.log(obj.prop) //output = 2

obj.prop =3; // throws an error in strict mode
console.log(obj.prop); //output = 2

//=====================================================================================

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
