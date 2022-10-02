var user = "vijay";
//console.log(user);

let adder = function(num1, num2){
    return num1 + num2;
};

// console.log(adder(5,6));
// module.exports.user = user;
// module.exports.adder = adder;

/* 
module.exports = {
    user : user,
    adder : adder
} 
*/

var hero = {
    title : "Ironman",
    firstname : "Tony",
    lastname : "Stark",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}

module.exports = { user, adder, fullname : hero.fullname() } ;