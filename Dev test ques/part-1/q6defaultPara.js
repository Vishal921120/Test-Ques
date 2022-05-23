//we can set a default parameter like this if we dont get any argument then we will
// get 5 as out default paraam
//otherwise whatever will be passed will replaced 5 in the paraam
function myfn(paraam = 5){
    console.log(paraam*2);
}

myfn();  // output = 10 bcz of default value 5
myfn(55); // output = 110 bcz it will replace value 5 with 55

function mytn(x1 , x2 , x3 = 5){
   console.log(x1*x2*x3);
}

mytn(8,8); // x1 =8 , x2=8 and x3 = 5 default , so 8*8*5 = 320 output
mytn(8,8,10); // output = 640 (8*8*10)