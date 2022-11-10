//The receivesAFunction function

function receivesAFunction(cb){
    cb()
}
//take a callback function as an argument: the argument is the cb *in* the ()
//call the callback function: by putting cb() b/w the curly braces, all we're doing is invoking/calling that function


// The returnsANamedFunction function should
    //take no arguments
    //return a named function

function returnsANamedFunction() {
    return function thisIsANamedFunction (){}
}


//The returnsAnAnonymousFunction function should:
    //take no arguments
    //return an anonymous function

function returnsAnAnonymousFunction(){
    return function (){}
}
