// object literals
//object is collection of properties and method 
const user={
username:"anand",// properties 
loginCount: '10',
signedIn: true,
getUserDetails: function(){// method
    console.log("Got user details from database");

}
}
console.log(user.username);
console.log(user.getUserDetails());
