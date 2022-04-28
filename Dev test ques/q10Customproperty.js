let myArr = [1,2]
myArr.customProperty = true;
// we want output 
//1
//2

//option 1. right option
// for(let index =0 ; index <myArr.length; index++){
//     const element = myArr[index]
//     console.log(element)
// }
// output 
//1
//2


// option 2 , this code has bug that would cause it to also log the value of myArr.customproperty
for(const index in myArr){
    const element = myArr[index]
    console.log(element)
}
//output
// 1
// 2
// ture


// option 3 also right
// for(const ele of myArr){
//     console.log(ele)
// }
//output 
//1
//2