function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username != "" && password != ""){
        if(username == "admin" && password == "admin"){
            alert("Login Successful!");
            return false;
        }
        else{
            alert("Username or Password is Invalid!");
        }
    }
    else{
        alert("Enter Username and Password!");
    }
}

function toggle(){
    let pwd = document.getElementById("password");
    if (pwd.type == "password"){
        pwd.type = "text";
    }
    else{
        pwd.type = "password";
    }
}
