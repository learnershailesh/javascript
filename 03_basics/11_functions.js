
function addTwonm(num1, num2){
    console.log(num1+num2);
}
const result =addTwonm(2,3);
console.log("answer:", result); // in  answer value is undefined


function addTwonm1(nm1,nm2){
    return nm1+nm2;
}
const results = addTwonm1(4,5)
console.log("answer:", results); // in answer value is return

function calculateprice(...numbers){
    return numbers;
}
console.log(calculateprice(100,200,300,400));

const anyobj ={
    anyname: "rkv",
    salary: 1000
}

function handleObject (anyobject){
    console.log(`employee name is ${anyobject.anyname} and salary is ${anyobject.salary}`);
}

handleObject(anyobj);