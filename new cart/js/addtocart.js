function AddToCart(productname) {
    const email = sessionStorage.getItem('email');
    const pn = productname;

    const cart_data = {
        email: email,
        product_name: pn
    }

    fetch("../php/addtocart.php", {
        method: "POST",
        body: JSON.stringify(cart_data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Successfully add to cart")
            } else {
                alert("Add to cart is failed , please try again");
            }

        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });

}




















