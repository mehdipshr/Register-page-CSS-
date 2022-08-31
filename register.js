// Function to check Whether both passwords
// is same or not.

function checkPassword(form) {
    let password = form.password.value;
    let  repeatPassword = form.repeatPassword.value;

    // If password not entered
    if (password == "") alert("Please enter Password");
    // If confirm password not entered
    else if (repeatPassword == "") alert("Please enter confirm password");
    // If Not same return False.
    else if (password != repeatPassword) {
        alert("\nPassword did not match: Please try again...");
        return false;
    }

    // If same return True.
    else {
        alert("Password Match: Welcome ");
        return true;
    }
}