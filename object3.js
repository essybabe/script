var user = function (firstName, lastName, email,courseCount) {
    this.firstName =firstName;
    this.lastName =lastName;
    this.email=email
    this.courseCount=courseCount;
    this.getcourseCount= function () {
        console.log(`your course count is: ${this.courseCount}`);
    }
}

let esther02= new user("great","Amakonze","greatamakonze@gmail.com", 5)
// console.log(esther02);

user.prototype.pickfirstName = function () {
   console.log(`my first name is ${this.firstName}`); 



}
esther02.getcourseCount()


if (esther02.hasOwnProperty("firstNamee")) {
    esther02.pickfirstName()
}



// let profile = function (name, dept, courseCount) {
//     this.name = name
//     this.course = dept
//     this.courseCount = courseCount

//     this.getCourseCount = function () {
//         console.log(this.courseCount);
//     }

        
    
// }


// let sam = new profile("Sam", "Web development", 3)

// console.log(sam);

// let Jahdiel = new profile("Jahdiel","Data Science", 5)

// console.log(Jahdiel);

