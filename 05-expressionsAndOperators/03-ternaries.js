// ternaries - short hand if else if statement

// if else if
let x = 6

if(x > 0) {
    console.log('yes');
} else {
    console.log('no')
};

//ternary

(x > 0) ? console.log('yes') : console.log('no');

// condition statement
if (x == 0) {
    console.log('hello')
} else if (x < 0) {
    console.log('hi')
} else {
    console,log('byE')
}

//ternary
let x = 6;
(x == 0) ? console.log ('hello') : (x < 0) ? console.log('hi') : console.log('byE')


//challenge

let age = 20;

(age <= 17) ? console.log('too young fuck off') : (age <= 20) ? console.log('voting is for losers') : (age <= 24) ? console.log('BOOOOOOOOOZE') : console.log('CAAR FUCKER')

//yote 

let yep = -8;

switch (true){
    case(yep < 0 && yep > -10):
    console.log('worked');
    break;

    case(yep > 0):
    console.log('didnt work');
    break;
default:
    console.log('didnt work')

}
    let yep = -8;
(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('didnt work') : console.log("Autumn is cool")



