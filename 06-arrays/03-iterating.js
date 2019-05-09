// iterating

// forEach() executes a function once for each array element

forEach('currentValue','theIndex','the entire array')

let food = ['pie','shrimp','cheese','hot dog'];

//food.forEach(f=>{console.log(f)})
//food.forEach( (f, number) => {console.log(number, f)})
food.forEach( (f, number, array) => {console.log(f, number, array)})

let foodFunction = () => {
    for (f in food) {
        console.log(f);
        console.log(food[f]);
        console.log(food);
    }
}
foodFunction()

let movies = ['Donnie Darko','Nightcrawler','Enemy','Nocturnal Animals','Southpaw','Zodiac','The Hunt for Red October'];

movies.push('Brokeback Mountain');
movies.splice(2,1,'Spiderman: Homecoming')

movies.forEach(m => {console.log(m)})