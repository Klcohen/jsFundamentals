// for of loops

//the for of statement creates a loop iterating over iterable objects, meaning it can numerically look over these items

let student = {name: 'pete', awesome: true, degree: 'Javascript', week: 1}
for (item of student) {
    console.log(item);
}
//student is not iterable

let dogArray = ['collie','pit','husky','corgie'];
for (dog of dogArray){
    console.log(dog)
}

