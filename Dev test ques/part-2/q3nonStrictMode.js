// what will be output in non strict mode
function x (first ,second, first){
    console.log(first,second,first)
}
x(1,2,3)  // output 3,2,3
// this function will run first completley 
// so for first will get 1 initially and then assigned 3 and this 3 will be new value for first
