// arrow functions

//normal
function coffee() {
    console.log('coffee rocks my world');
}

// fat arrow

let coffee = () => {
    console.log('fuck me up Phat Arrow');
}

coffee()

let apples = x => console.log(`there are ${x} apples`);
apples(7000);

//consise bodies dont need paranthesis unless you have more than one parameter

let apples = (x,y) => console.log(`there are ${x} apples and ${y} pears`);
apples(7000,'no');

//block body
let apples = x => {
    console.log(`there are ${x} apples`);}
apples(7000);