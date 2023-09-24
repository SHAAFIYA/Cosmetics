document.addEventListener("DOMContentLoaded", function(){
    username();
});

function username(){
    const email = sessionStorage.getItem('email');
    console.log(email)

    fetch("../php/username.php", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        const userFirstName = data.userFirstName;
        console.log(userFirstName)
        const firstNameElement = document.getElementById("userFirstName");
        if (firstNameElement) {
            firstNameElement.innerText = userFirstName;
        }
    })
    .catch((error) => {
        console.error("Error fetching user data: " + error);
    });
}
