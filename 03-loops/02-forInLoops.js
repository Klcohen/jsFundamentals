// FOr in loops

// great for iterating over values in an object

let student = { name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};
for (item in student) {
    console.log('item=>', item); 
    console.log('student[item]=>',student[item]);
}

let dogArray = ['collie','pit','husky','corgie'];
for (dog in dogArray){
    console.log(dog)
}

let studentName = 'hey dudddddde';
let capName;
for (let i in studentName){
    if (i==0){
       capName= studentName[i].toUpperCase();
    }else{
    capName += studentName[i].toLowerCase();   
    }
}   console.log(capName)
