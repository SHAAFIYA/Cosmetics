function redirectToIndex() {
    console.log("Button clicked"); 
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var confirmPassword = document.getElementsByName("confirm-password")[0].value;

    // Check if the email is valid
    if (!email.includes('@')) {
        alert("Invalid Email id");
        return;
    }
    if (!isLowerCase(email)) {
        alert("Email must be in lowercase letters.");
        return;
    }
    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if the password meets complexity requirements
    if (!isPasswordComplex(password)) {
        alert("Password must include uppercase letters, lowercase letters, symbols, and numbers.");
        return;
    }

}

// Toggle password visibility for "Password" field
document.getElementById("show-password-checkbox").addEventListener("change", function() {
    togglePasswordVisibility("password");
});

// Toggle password visibility for "Confirm Password" field
document.getElementById("show-password-checkbox").addEventListener("change", function() {
    togglePasswordVisibility("confirm-password");
});

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementsByName(inputId)[0];
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
// Check if a string is in lowercase letters
function isLowerCase(str) {
    return str === str.toLowerCase();
}
// Password complexity validation function
function isPasswordComplex(password) {
    // Use regular expressions to check for complexity
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var symbolRegex = /[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/-]/;
    var numberRegex = /[0-9]/;

    return (
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        symbolRegex.test(password) &&
        numberRegex.test(password)
    );
}


function submitForm() {
    // Get form input values
    const firstName = document.querySelector('input[name="first-name"]').value;
    const lastName = document.querySelector('input[name="last-name"]').value;
    const phoneNumber = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }


        // Create an object with user data including the hashed password
        const userData = {
            firstName,
            lastName,
            phoneNumber,
            email,
            password, // Use the hashed password here
        }
    

    // Send the data to the PHP script using AJAX
    fetch("../php/signup.php", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            alert("Registration successful!");
            window.location.href = "../html/home.html";
        } else {
            alert("Registration failed. Please try again.");
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
}
