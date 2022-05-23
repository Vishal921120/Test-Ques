const obj = {
    prop1 : function(){return 0},
    prop2() {return 6},
    // ['prop' +/ ]() {return 2} // invalid regular expression
}

console.log(obj.prop1()) //output 0
console.log(obj.prop2()) //output 6
console.log(obj.prop3()) // syntax error