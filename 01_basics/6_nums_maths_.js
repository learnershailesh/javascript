const score = 400
console.log(score)
const newNumber = new Number(400)
console.log(newNumber);

console.log(newNumber.toString().length);
console.log(newNumber.toFixed(2));

const anotherNumber = 23.876
console.log(anotherNumber.toPrecision(3));

const hundreds = 10000000
 console.log(hundreds.toLocaleString());
 console.log(hundreds.toLocaleString('en-In'))

 //++++++++++++++++++++++++Math+++++++++++++++++++

 console.log(Math);

 console.log(Math.abs(-4))
 console.log(Math.round(3.7));
 console.log(Math.ceil(3.1))
 console.log(Math.floor(3.7));

 console.log(Math.random())
 console.log((Math.random() * 10) + 1);

 const min =10
 const max = 20
 console.log(Math.floor(Math.random() *(max-min+1))+min);
 