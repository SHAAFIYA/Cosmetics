document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});

function displayCartItems() {
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
            const tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";

            // Initialize subtotal
            let subtotal = 0;

            cartData.forEach((item) => {
                fetch("../php/getProductDetails.php", {
                    method: "POST",
                    body: JSON.stringify({ product_name: item.product_name }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((productDetails) => {
                        const row = document.createElement("tr");

                        const imageCell = document.createElement("td");
                        const productImage = document.createElement("img");

                        productImage.src = "../image/" + productDetails.image_name;
                        productImage.alt = productDetails.name;
                        imageCell.appendChild(productImage);

                        const nameCell = document.createElement("td");
                        nameCell.innerText = productDetails.name;

                        const quantityCell = document.createElement("td");

                        // Create input element for quantity
                        const quantityInput = document.createElement("input");
                        quantityInput.type = "number";
                        quantityInput.value = item.quantity;
                        quantityInput.min = 1; // Set minimum value
                        quantityInput.addEventListener("input", () => {
                            // Update quantity and total when input changes
                            const newQuantity = parseInt(quantityInput.value, 10);
                            item.quantity = newQuantity;
                            updateTotal(); // Update total when quantity changes
                        });

                        quantityCell.appendChild(quantityInput);

                        const priceCell = document.createElement("td");
                        priceCell.innerText = "₹" + productDetails.price.toFixed(2);

                        const totalCell = document.createElement("td");
                        const total = productDetails.price * item.quantity;
                        totalCell.innerText = "₹" + total.toFixed(2);

                        // Update subtotal
                        subtotal += total;

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

            // Update subtotal and total
            const subTotalElement = document.getElementById("subTotal");
            const grandTotalElement = document.getElementById("grandTotal");
            subTotalElement.innerText = "₹" + subtotal.toFixed(2);
            grandTotalElement.innerText = "₹" + subtotal.toFixed(2);
        })
        .catch((error) => {
            console.error("Error fetching cart data: " + error);
        });
}


// Define the updateTotal function
function updateTotal() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.getElementsByTagName("tr");
    let subtotal = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const quantityInput = row.querySelector("input[type='number']");
        const priceCell = row.querySelector("td:nth-child(4)");
        const totalCell = row.querySelector("td:nth-child(5)");

        // Get quantity and price values
        const quantity = parseInt(quantityInput.value, 10);
        const price = parseFloat(priceCell.innerText.replace("₹", ""));
        const total = quantity * price;

        // Update the total cell
        totalCell.innerText = "₹" + total.toFixed(2);

        // Add to subtotal
        subtotal += total;
    }

    // Update subtotal and grand total
    const subTotalElement = document.getElementById("subTotal");
    const grandTotalElement = document.getElementById("grandTotal");
    subTotalElement.innerText = "₹" + subtotal.toFixed(2);
    grandTotalElement.innerText = "₹" + subtotal.toFixed(2);
}