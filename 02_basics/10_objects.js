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
