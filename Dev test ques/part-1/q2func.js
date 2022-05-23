let x = "fog";
function first(){
    console.log(x);
};
x="dog";
function second(){
    let x = "log";
    first();
};


//what is logged when the function 'second' runs? = dog