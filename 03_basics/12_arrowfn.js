
const obj1 = {
    username: "shailesh",
    age: 20,
    email: "shkmaurya",
    addInformation: function(){
       // console.log(`${this.username} is my name`);
       // console.log(this);
    }
}

//obj1.addInformation()

//obj1.username = "awarashailesh"
//obj1.addInformation()


//this is called arrow function
const another = ()=>{
    let usernam1 = "skm"
    console.log(this);
}
another();

//it is also write like that
const twonum =(num1, num2) => num1+num2
console.log(twonum(3,4))