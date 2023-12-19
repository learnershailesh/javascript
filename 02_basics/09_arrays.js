
const marvel_heroes = ["Ironman","Thor","Hulk"]

const dc_heroes = ["superman","spiderman","batman","flash"]

//const all_heroes = marvel_heroes.concat(dc_heroes)

//console.log(all_heroes);

const new_allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(new_allHeroes);

const allArr = [2,4,5,6,[4,7,2,0], 7, [5,6,7, [0,8,6,4]]]
const realAnother = allArr.flat(Infinity)

console.log(realAnother)


console.log(Array.from("Shailesh")) //convert into array

console.log(Array.from({name: "skm"})); //when it confused what to convert into array then its return empty array []
let val1 = 100
let val2 = 200
let var3 = 300

console.log(Array.of(val1,val2, var3)); // all convert into element of array [100,200,300]