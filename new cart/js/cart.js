var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayCartItems() {
    document.getElementById("tableBody").innerHTML = "";

    cartArr.map(function(elem, index) {
        var row = document.createElement("tr");

        var image = document.createElement("img");
        image.setAttribute("src", elem.image);

        var photo = document.createElement("td");
        photo.append(image);

        var name = document.createElement("td");
        name.innerText = elem.name.toUpperCase();

        var quantity = document.createElement("td");

        deductButton = document.createElement("button");
        deductButton.innerText = "-";
        deductButton.setAttribute("class", "quantityButton");
        deductButton.addEventListener("click", function() {
            decreaseQuantity(index);
        })

        quantity.textContent = elem.quantity;

        var addButton = document.createElement("button");
        addButton.innerText = "+";
        addButton.setAttribute("class", "quantityButton");
        addButton.addEventListener("click", function() {
            increaseQuantity(index)
        });
        quantity.append(deductButton, addButton);

        var price = document.createElement("td");
        price.innerText = "₹" + elem.price + ".00";

        var total = document.createElement("td");   
        total.innerText = "₹" + (elem.price * elem.quantity) + ".00";

        row.append(photo, name, quantity, price, total);
        document.getElementById("tableBody").append(row);
    });

    // Update the totals
    updateTotal();
}

// Call the displayCartItems function to initially populate the cart
displayCartItems();

function updateTotal() {
    var subTotal = cartArr.reduce(function(acc, elem) {
        return acc + (elem.price * elem.quantity);
    }, 0);


// Update Subtotal, Estimated Total, and Grand Total
document.getElementById("subTotal").textContent = "₹" + subTotal.toFixed(4);
document.getElementById("total").textContent = "₹" + subTotal.toFixed(4);
document.getElementById("grandTotal").textContent = "₹" + subTotal.toFixed(4);
document.getElementById("Total").textContent = "₹" + subTotal.toFixed(4);

}

function decreaseQuantity(index) {
    cartArr[index].quantity--;
    if (cartArr[index].quantity < 1) {
        // Remove the item if quantity becomes zero or negative
        cartArr.splice(index, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartArr));

    displayCartItems();
}

function increaseQuantity(index) {
    cartArr[index].quantity++;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));

    displayCartItems();
}
function clearCart() {
    // Clear the cart array
    cartArr = [];
    
    // Clear cart items in localStorage
    localStorage.removeItem("cartItems");
    
    // Update the cart display and totals
    displayCartItems();
    updateTotal();
}