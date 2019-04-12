function submitform(){
    var targetField = document.getElementById("firstname");
     if (targetField.value.length === 0) {
     alert("Please fill all field");
     targetField.focus();
     return false;
     }
     var firstname = document.getElementById("firstname");
     var lastName = document.getElementById("lastname");
     var email = document.getElementById("email");
     var password = document.getElementById("password");
     var contact = document.getElementById("contact");
     var age = document.getElementById("age");
    
     console.log(firstname);
     console.log(lastName);
     console.log(email);
     console.log(password);
     console.log(contact);
    
        
            var users = localStorage.getItem('users');
            console.log(users);
        
        
        
        if(users === null){
    
            users = []
            console.log(users)
        }
        else{
            users = JSON.parse(users);
        console.log(users);
        }
        var userObject = {
            firstname : firstname.value,
            lastName : lastName.value,
            email : email.value,
            password : password.value,
            contact : contact.value,
            age : age.value
    
        }
    console.log(userObject);
        users.push(userObject);
    console.log(users)
    
        users = localStorage.setItem('users',JSON.stringify(users))
      
                window.location.assign("index.html");

        
    
    }