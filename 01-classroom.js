// Recap challenge

let stringExample = 'string';
let numberExample = 0;
let booleanExample = true;

let conditionExample = 0;


let thing = true;
let type = typeof(thing);

if (type === 'number') {
    console.log('number')
} else if (type === 'string' ) {
        console.log('string')
} else{
    console.log('boolean')
}

let thing = 'bitch';
let type = typeof(thing);
(type === 'number') ? console.log('number') : (type === 'string') ? console.log('string') : console.log('boolean');


let thing =2;
let type = typeof(thing);

switch (true){
    case(type === 'number'):
    console.log('number');
    break;

    case(type === 'string'):
    console.log('string');
    break;
    case(type === 'boolean'):
    console.log('boolean')
    break;
default: ('stop being such a fat bitch and write a data type')

}