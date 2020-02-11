function validate(){

    let emailId = document.StudentRegistration.emailId.value;
    let password = document.StudentRegistration.password.value;
    let confirmPassword = document.StudentRegistration.confirmPassword.value;
    let firstName = document.StudentRegistration.firstName.value;
    let lastName = document.StudentRegistration.lastName.value;
   
    if(emailId == ""){
        document.getElementById('emailIdError').innerHTML = "** EmailId cannot be empty";
        document.getElementById('emailId').focus()
        return false;
    }
    if(password == ""){
        document.getElementById('passwordError').innerHTML = "** Password cannot be empty";
        document.getElementById('passwordError').focus()
        return false;
    }
    if(confirmPassword == ""){
        document.getElementById('confirmPasswordError').innerHTML = "** ConfirmPassword cannot be empty";
        document.getElementById('confirmPasswordError').focus()
        return false;
    }
    if(firstName == ""){
        document.getElementById('firstNameError').innerHTML = "** FirstName cannot be empty";
        document.getElementById('firstNameError').focus()
        return false;
    }
    if(lastName == ""){
        document.getElementById('lastNameError').innerHTML = "** LastName cannot be empty";
        document.getElementById('emailId').focus()
        return false;
    }

    if(password != confirmPassword){
        document.getElementById('confirmPasswordError').innerHTML = "** Password doesnot match";
        document.getElementById('lastNameError').focus()
        return false;
    }

    
}

