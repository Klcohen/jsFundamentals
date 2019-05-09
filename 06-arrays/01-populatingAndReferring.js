// arrays 

//arrays are an object they are a container thaat can hold multiple data types'
// has [] brackets
//great for lists

let students = ['sebastion','eeric','mikey',24, 234, false, ['nick', 'chalrs', 'dave']]

//console.log(typeof students);
//console.log(students instanceof Array);
// console.log(students[2])
console.log(students[6][1])

let food = ['pie','shrimp','cheese','hot dog'];
//food.push('Pizza') // adds pizza to array
// food.splice(1,1,'CLAMZ')// adds clams and deletes shrimp
// food.splice(2,0,'potatoes')
food.pop(); //removes last item in list
food.shift();//removes first item on list
food.unshift('muffin','apple');//adds new items to the begining of list

for (f in food) {
    console.log(food[f]);
    //console.log(f)
}
