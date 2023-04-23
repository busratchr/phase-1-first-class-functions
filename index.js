function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function hi(){
        console.log("Yes");
    }
}

function returnsAnAnonymousFunction(){
    return () => "Happiness";
}
