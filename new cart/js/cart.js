document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});

function displayCartItems() {
    console.log("Cart Function called")
    const email = sessionStorage.getItem('email');
    fetch("../php/getCartData.php", {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((cartData) => {
            console.log("cart data php is worked")
            console.log(cartData)
            const tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";

            cartData.forEach((item) => {
                console.log(item.product_name)
                fetch("../php/getProductDetails.php", {
                    method: "POST",
                    body: JSON.stringify({ product_name: item.product_name }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((productDetails) => {
                        console.log("product details php is worked")
                        console.log(productDetails)
                        const row = document.createElement("tr");

                        const imageCell = document.createElement("td");
                        const productImage = document.createElement("img");

                        productImage.src = "../image/" + productDetails.image_name;

                        productImage.alt = productDetails.name;
                        imageCell.appendChild(productImage);

                        const nameCell = document.createElement("td");
                        nameCell.innerText = productDetails.name;

                        const quantityCell = document.createElement("td");
                        quantityCell.innerText = item.quantity;

                        const priceCell = document.createElement("td");
                        priceCell.innerText = "₹" + productDetails.price.toFixed(2);

                        const totalCell = document.createElement("td");
                        const total = productDetails.price * item.quantity;
                        totalCell.innerText = "₹" + total.toFixed(2);

                        row.appendChild(imageCell);
                        row.appendChild(nameCell);
                        row.appendChild(quantityCell);
                        row.appendChild(priceCell);
                        row.appendChild(totalCell);

                        tableBody.appendChild(row);
                    })
                    .catch((error) => {
                        console.error("Error fetching product details: " + error);
                    });
            });
        })
        .catch((error) => {
            console.error("Error fetching cart data: " + error);
        });
}
