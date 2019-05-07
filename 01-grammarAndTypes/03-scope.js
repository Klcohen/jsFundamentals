//scope is a function
//localand global function
//determines accessibility
// variables within a scope are not accessible outside the function

let x = 12

function scope() {
    let x = 33;
    console.log(x);
}
scope();
console.log(x);

let x = 12
function coffee(){
    x = 33
    console.log(x);
}

coffee()
console.log(x);

//var vs let

//var
var x = 12
function scope(){
    var x = 33
    if (true){
        var x = 45;
        console.log(x);
    }
    console.log(x);
    }
scope()
console.log(x);

//let
var x = 12
function scope(){
    var x = 33
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
    }
scope()
console.log(x);

// let is locked and var bleeds
//dont use var, use let

//conts
var x = 12
function scope(){
    const x = 33
    if (true){
        const x = 45;
        console.log(x);
    }
    console.log(x);
    }
scope()
console.log(x);