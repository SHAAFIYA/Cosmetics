


function submitForm() {
            // Get form input values
           
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

        // Create an object with the user's login data
    const loginData = {
        email: email,
        password: password
    };

        // Send the data to the PHP script using AJAX
    fetch("../php/login.php", {
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
            sessionStorage.setItem('email', email);
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



