// length

let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length)

let colors = ['red','blue','orange','yellow','green','black'];
console.log(colors.length)
console.log(colors.toString())

let colors = ['red','blue','orange','yellow','green','black'];
console.log(typeof colors);
console.log(typeof colors.toString())

// challenge


let arr = [1,2,3,4,5]
if (arr instanceof Array === true){
    let revArrr = arr.reverse()
    arr.forEach(item=> {console.log(item)})
}else{
    console.log('THIS AINT A FUCKIN ARRAY')
}
