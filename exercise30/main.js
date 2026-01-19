

// callback

function operate(a,b,callback){
    return callback(a,b)
}

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function multiplay(a,b){
return a*b
}

function divide(a,b){
    return a/b
}

console.log("adition",operate(2,4,add))
console.log("subtraction",operate(20,9,sub))
console.log("multiplay",operate(5,5,multiplay))
console.log("divide",operate(40,4,divide))