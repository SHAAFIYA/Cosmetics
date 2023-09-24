function checkout() {
    // Assuming you have the user's email in session storage
    const email = sessionStorage.getItem('email');

    // Fetch cart data to determine which products to move to the shipping table
    fetch("../php/getCartData.php", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((cartData) => {
            cartData.forEach((item) => {
                const productName = item.product_name;
                const quantity = item.quantity;
                fetch("../php/checkout.php", {
                    method: "POST",
                    body: JSON.stringify({ email: email, productName: productName, quantity: quantity }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        if (result.success) {
                            window.location.href = "success.html"
                        } else {
                            console.error("Error moving product to shipping: " + result.error);
                        }
                    })
                    .catch((error) => {
                        console.error("Error moving product to shipping: " + error);
                    });
            });
        })
        .catch((error) => {
            console.error("Error fetching cart data: " + error);
        });
}


function clearCart() {
    const email = sessionStorage.getItem('email');

    fetch("../php/clearCart.php", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                const tableBody = document.getElementById("tableBody");
                tableBody.innerHTML = "";
                updateTotal();

                alert("Cart cleared successfully.");
            } else {
                console.error("Error clearing cart: " + result.error);
            }
        })
        .catch((error) => {
            console.error("Error clearing cart: " + error);
        });
}

