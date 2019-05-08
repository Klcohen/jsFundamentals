// loops perform logic over data

/*
loop is a programming tool that repeats a series of instructions until a specified
condition is met
*/

const vacationSpots = ['Florence','Copenhagen', 'Instanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


// types of loops
/*
for statement
do while statement
while statement
labeled statement
break statement
continue statement
for in statement
for of statement
*/

//^C will stop the terminal incase of infinite loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//challenge

for (let i = 0; i < 21; i+=2 ){
    console.log(i)
}

//Challenge

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i >= -24; i-= 2) {
    console.log(i)
}

let name = 'Keve'

for ( i = 0; i < name.length; i++ ){
    console.log(name[i])
}

let sum = 0;

for (let i = 1; i <= 50; i++) {
   sum = sum + i;

}
console.log(sum)
