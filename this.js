// let user={
//     firstname:'hardyy',
//     lastname:'collins',
//     role:'admin',
//     loginCount:32,
//     SignedIn:true,
//     courselist:[],
//     Takecourse:function() {
//         console.log(this);
//     }
    
// }

// function cal() {
//     console.log(this);
// }

// // user.Takecourse()

// cal()

let items =[1,2,3,4,'rice','fuel',true]

let user={
        firstname:'hardyy',
        lastname:'collins',
        role:'admin',
        loginCount:32,
        SignedIn:true,
        courselist:[],
}
// items.forEach((item)=>console.log(item))

// for (const item of items) {
//     console.log(item);
// }

for (const u in user) {
   console.log(user[u]);

//    to get the keys and the values
for (const key in user) {
   console.log(`my ${key} is ${user[key]}`);
        
    }
}
        
    
