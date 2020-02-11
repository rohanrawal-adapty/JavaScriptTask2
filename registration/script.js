function validate(){

    let emailId = document.StudentRegistration.emailId.value;
    let password = document.StudentRegistration.password.value;
    let confirmPassword = document.StudentRegistration.confirmPassword.value;
    let firstName = document.StudentRegistration.firstName.value;
    let lastName = document.StudentRegistration.lastName.value;
   
   
    if(emailId == ""){
        document.getElementById('emailIdError').innerHTML = "** EmailId cannot be empty";
        document.getElementById('emailId').style.border  ='2px solid red';
        return false;
    }else{
        document.getElementById('emailIdError').innerHTML = "";
        document.getElementById('emailId').style.border  ='';
    }

    if(password == ""){
        document.getElementById('passwordError').innerHTML = "** Password cannot be empty";
        document.getElementById('password').style.border  ='2px solid red';
        return false;
    }else{
        document.getElementById('passwordError').innerHTML = "";
        document.getElementById('password').style.border  ='';
    }

    if(confirmPassword == ""){
        document.getElementById('confirmPasswordError').innerHTML = "** ConfirmPassword cannot be empty";
        document.getElementById('confirmPassword').style.border  ='2px solid red';
        return false;
    }else{
        document.getElementById('confirmPasswordError').innerHTML = "";
        document.getElementById('confirmPassword').style.border  ='';
    }

    if(firstName == ""){
        document.getElementById('firstNameError').innerHTML = "** FirstName cannot be empty";
        document.getElementById('firstName').style.border  ='2px solid red';
        return false;
    }else{
        document.getElementById('firstNameError').innerHTML = "";
        document.getElementById('firstName').style.border  ='';
    }

    if(lastName == ""){
        document.getElementById('lastNameError').innerHTML = "** LastName cannot be empty";
        document.getElementById('lastName').style.border  ='2px solid red';
        return false;
    }else{
        document.getElementById('lastNameError').innerHTML = "";
        document.getElementById('lastName').style.border  ='';
    }

    if(password != confirmPassword){
        document.getElementById('confirmPasswordError').innerHTML = "** Password doesnot match";
        document.getElementById('confirmPassword').style.border  ='2px solid red';       
        return false;
    }else{
        document.getElementById('confirmPasswordError').innerHTML = "";
        document.getElementById('confirmPassword').style.border  ='';
    }

}

