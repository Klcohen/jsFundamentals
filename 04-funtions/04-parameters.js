// parameters values within the function

function hi(parameter1, parameter2){
    console.log('yo')
    console.log(parameter1)
}

function pet(animal) {
    console.log(`i have a ${animal} for a pet`)

}

pet('cat');
pet('dog');
pet('human');


function rap(firstName, lastName) {
    let fulName = firstName + ' '+ lastName
    console.log(`Hi! my name is ${fulName}`)
}

rap('Slim','Shady')