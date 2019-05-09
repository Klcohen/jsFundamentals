// returns

function capitalizeName(name) {
    let capName =' ';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    //console.log(capName)
    return capName
}

const myName = capitalizeName('keve')

console.log(`${myName} in the hizzouse`)

//challenge

function tip(bill) {
    let tip = (bill* percentage);
    return tip.toFixed(2)
}
let percentage = .20
let bill = 45.95
var myTip = tip(bill)
console.log(`if my bill is ${bill} and I want to tip ${percentage} I will tip ${myTip} dollars`)