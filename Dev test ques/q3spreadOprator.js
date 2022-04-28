function myFunction(y1,y2,...y3){
    // console.log(y3) // output = [ 'scissor', 'lizard', 'spock' ]
    const [x1,...[result]] = y3
    // console.log(result) //output = lizard
}

const myArray = ['rock','paper','scissor','lizard','spock']
myFunction(...myArray);


// so when we use ...[] , so it takes first element of the remianing
function myFunction1(y1,y2,...[y3]){  // like here y3 will get only scissor
    // console.log(y2) // output = paper
    console.log(y3) // output = scissor
    const [x1,...[result]] = y3 //like here result will only get c 
    console.log(x1) //output = x
    console.log(result) //output = c
}

const myArray1 = ['rock','paper','scissor','lizard','spock']
myFunction1(...myArray1);