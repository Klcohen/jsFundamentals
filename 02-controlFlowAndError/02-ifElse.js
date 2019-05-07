
//If else

weather = 75

if (weather < 70){
    console.log('wear a jacket bitch')
} else{
    console.log('no jacket necessary')
};

// syntax for is else

// if(condition) {
//     logic
//     console.log(logic)
// } else {
//     console.log(error)
// }

let name = 'Keve Cohen'

if (name == 'Keve Cohen') {
    console.log('Hello, my name is', name)
}else{
    console.log('Hello, what is your name?')
}

let name = 'kILL ME NOW I WANT TO DIE';
if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter)
}else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

// else if

// if (condition) {
//     logic a
// } else if (different condition) {
//     logic b
// } else {
//     logic c
// }

age = 10
if (age <= 17) {
    console.log('sorry, youre too young to do anything')
} else if (age <= 20) {
    console.log('yay, voting')
} else if (age <= 24) {
    console.log('Yay getting trashed legally')
} else {
    console.log('rent a car and crash it off a cliff')
}
