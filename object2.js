let user={
    firstname:'hardyy',
    lastname:'collins',
    role:'admin',
    loginCount:32,
    SignedIn:true,
    courselist:[],
    Takecourse:function(coursename) {
        this.courselist.push(coursename)
    },
    Totaltakencourse:function () {
        return `${this.firstname} is taking ${this.courselist.length} course`
    }


}

var courselist=true
console.log(user.Totaltakencourse());
user.Takecourse("html5")
console.log(user.Totaltakencourse());

