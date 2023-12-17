// stack(primitive datatype store in stack "copy value")
//  Heap(non primitive datatype store in Heap "original value")


// example of stack

let employedName = "Shailesh"
let anotherNAme = employedName
anotherNAme = "ShaileshKumarMaurya"
console.log(employedName)
console.log(anotherNAme)
// its store in stack and the anotherName don't able to change the original employedName


//example of Heap


let arts={
    names: "akm",
    age:20,
    id:  3456
};
 arts.names="skm"
let newart = arts.names;
console.log(arts)
console.log(newart)

//it is store in Heap memory & newart is able to change the original arts.names


