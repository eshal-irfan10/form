function validation() {
    let fName = document.getElementById("Fname").value.trim();
    let lName = document.getElementById("Lname").value.trim();
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("cp").value.trim();
    let phone = document.getElementById("p").value.trim();
    
    if (fName === "" || lName === "" || email === "" || password === "" || confirm === "" || phone === "") {
        alert("All fields are mandatory to fill");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    var lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(password)) {
        alert("Password should have at least one lowercase letter");
        return false;
    }
    
    var upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(password)) {
        alert("Password should have at least one uppercase letter");
        return false;
    }

    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number should contain only numeric characters");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    // Redirect to data.html if validation is successful
    window.location.href = "data.html";
    return false; // Prevent default form submission
}
