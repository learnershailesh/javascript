const name = "shailesh"

const age = 20

//console.log(name + age + "value") not recomended

console.log(`my name is ${name} and my age is ${age} and so on`)

const gameName = new String("shaileshkumarMaurya");

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())


const newString = gameName.substring(0,5)
console.log(newString);
console.log(gameName.charAt(4))
console.log(gameName.indexOf("k"))

const anotherString = gameName.slice(-4, 8)
console.log(anotherString);

const stringOne = "     sfhfhlkf   "
console.log(stringOne);
console.log(stringOne.trim());