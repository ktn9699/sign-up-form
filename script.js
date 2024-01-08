
let passValue;
let confirmValue;
let error = document.querySelectorAll('.error')

document.getElementById("pass")  .addEventListener('input', (element) => {
    passValue = element.target.value;
    if (passValue.length < 8) {
        error[0].innerHTML = "Password must have minimum of 8 characters*" // Ensure that the user has 8 or more characters for their passwords. 
    }
    else {
    error[0].innerHTML = '';
}
} 
)
document.getElementById("cpass")  .addEventListener('input', (element) => {
    confirmValue = element.target.value;
    if (passValue !== confirmValue) {   // Checks to see if the passwords match.
        error[1].innerHTML = 'Passwords do not not match*' // returns error message if passwords are not equal to eachother. 
    }
    else {
        error[1].innerHTML = '';
    }
}
)
document.getElementById('form').addEventListener('submit', function (e) {
   if (passValue !== confirmValue) {
    alert("Make sure the passwords are the same!");
    e.preventDefault();   // If the two passwords are the equal to eachother, when user tries to submit form, it will not go through. 
   }
    else {
    alert("Form has been submitted!")
    }

})