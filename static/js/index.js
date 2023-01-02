function validateform(){
    let name = document.getElementById('name').value;
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('cnf_pass').value;
    let phone = document.getElementById('phone').value;
    if (name==null||name==""){
        document.getElementById('name1').innerHTML = "Please enter a name";
        return false;
    }

    if (password.length<6){
        document.getElementById('pass1').innerHTML = "Please enter a password with at least 6 characters";
        return false;

    }
    if (confirmPassword!=password){
        document.getElementById('cnf_pass1').innerHTML = "Passwords do not match";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById('phone1').innerHTML = "Please enter a valid phone number";
        return false;

    }
    else{
        return true;
    }
}
var req = 3;
function loginValidation(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let submit = document.getElementById('submit');
    if(req==0){
        email.disabled = true;
        password.disabled = true;
        submit.disabled = true;
        return false;
    }
    if (email=="abc@gmail.com" && password=="1234@_56"){
        document.getElementById("logged").innerHTML="Logged in successfully";
        return true;
    }
    else{
        document.getElementById("logged").innerHTML="Invalid email or password";
        req--;
        document.getElementById("logged").innerHTML="You have "+req+" attempts left to log in successfully";
        return false;
    }
}