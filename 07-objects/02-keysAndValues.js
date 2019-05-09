//object.keys and object.values

//object.keys() is a method that returns an array of a given objects prop tags
//object.value() is a method that returns an array of a given objects own enumerable property values

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//   console.log(Object.keys(spaceJam.toonSquad))
//console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad))


let garden = {
    vegetable: "zucc",
    flower: "peonies",
    fruit: "blood orange",
    water: true,
    sun: true,
    size: 10
};

// console.log(garden.vegetable);

// let x = 'vegetable';
// console.log(garden.x, garden[x]);

// let baking = {};
// baking["zucc"] = 'better make some bread';
// console.log(baking[garden['vegetable']])

let key = 'water';
Object.keys(garden).forEach(g => {
    // console.log(g)
    if (key === g){
        console.log(garden[key]);
    }
})