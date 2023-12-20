//object literals

const user={
    name: "skm",
    age: 16,
    email: "skm@googleweb3.com",
    Islogin: false,
    lastLogin: ["monday", "tuesday"]
}

console.log(user.email);
console.log(user["email"]);

//singlet object

const realuser = new Object()

realuser.id= "adfgr@"
realuser.name = "skmaurya"

console.log(realuser);

const regularUser = {
    emails: "sdtyjuj@1323kgmail.com",
    fullname: {
        userfullname:{
            firstname: "shkmi",
            secondname: "kumaar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}

//const obj3 = console.log(Object.assign( {}, obj1, obj2));

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('Islogin'));

const {email: ww} = user;
console.log(ww);
/*{
    "names": "skmaurya",
    "course": "username",
    "iuoefneoi": "fnei"
}
    api is look like this syntex
*/


