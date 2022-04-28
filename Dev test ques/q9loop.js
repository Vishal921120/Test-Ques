const myArr = new Array(2)  // in paranthesis we put lenght of array

myArr[1] =1;
myArr[3] =3; // this will make array length 4 irrespective of the fact that we defined 2 in above line

console.log('length:' , myArr.length);

console.log('elements:')
for(const element of myArr){
    console.log('\t', element) // \t for spacing of tab 
}

//output
// length: 4
// elements:
//          undefined
//          1
//          undefined
//          3