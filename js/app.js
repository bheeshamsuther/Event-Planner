var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");

function signUp(){
//     var users = localStorage.getItem('users');
//     console.log(users);

//     var userExist = false;
//     if(users === null){
//         users = [];
//     }
// else {
//     users = JSON.parse(users);
//     console.log(users);

// }
// var user = {
//     email:email.value,
//     password:password.value,
// }
// var emaiValue = email.value;
// emaiValue = emaiValue.slice(emaiValue.length-4);
// if(emaiValue !== ".com"){
//     alert("Enter valid email address")
// }
// else{
// for (var i = 0; i < users.length; i++) {
//     if(users[i].email === email.value) {
//         userExist = true;
//     }
//     }
//     if (userExist === true) {
//         message.innerHTML = "User already";

//     }
//     else {
//         users.push(user);
//         users = JSON.stringify(users);
//         users = localStorage.setItem('users',users);

//         email.value = "";
//         password.value = "";

//         message.innerHTML = "successfully Signup!"
//     }
// }
// localStorage.setItem("creatnew" , JSON.stringify(creatnew))


window.location.href = ("signUp.html");
var newVar = JSON.stringify(user1)
localStorage.setItem("newVar",newVar)
message.innerHTML = "Login Success";
email.value = "";
password.password = "";
}


function logIn(){
    var users = localStorage.getItem('users');
    console.log(users);
    var user1 = {
        email : email.value,
        password:password.value,
    }
    if(users === null){
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    var authantication = false;
    for (var i = 0; i < users.length; i++) {
        if(users[i].email === email.value && users[i].password === password.value) {
           authantication = true;
        }
    }
    if (authantication === false) {
        message.innerHTML = "Login Faild";

    }
    else {

        var creat1 = localStorage.getItem("creat");
        if (creat1 === null){
            creat1 = [];
        }
        else{
            creat1 = JSON.parse(creat1);
        }
        var creatnew=[]
        for (var j = 0; j < creat1.length; j++){
            if (creat1[j].email1.email === email.value){
        creatnew.push(creat1[j])
            }
        }
   
        localStorage.setItem("creatnew" , JSON.stringify(creatnew))


        window.location.href = ("home.html");
        var newVar = JSON.stringify(user1)
        localStorage.setItem("newVar",newVar)
        message.innerHTML = "Login Success";
        email.value = "";
        password.password = "";
    }
  }