<?php
header("Content-Type: application/json");

function connectToDatabase() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "beauty_elixer";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents("php://input"));
    $email = filter_var($input->email, FILTER_SANITIZE_EMAIL);
    $productName = filter_var($input->productName, FILTER_SANITIZE_STRING);
    $quantity = intval($input->quantity);

    $conn = connectToDatabase();

    // Example SQL queries (modify as needed):
    $sqlDeleteFromCart = "DELETE FROM user_carts WHERE email = ? AND product_name = ?";
    $sqlInsertIntoShipping = "INSERT INTO shipping(email, product_name, quantity) VALUES (?, ?, ?)";

    // Use prepared statements to prevent SQL injection
    $stmt1 = $conn->prepare($sqlDeleteFromCart);
    $stmt1->bind_param("ss", $email, $productName);

    $stmt2 = $conn->prepare($sqlInsertIntoShipping);
    $stmt2->bind_param("ssi", $email, $productName, $quantity);

    // Execute the statements
    $success = $stmt1->execute() && $stmt2->execute();

    if ($success) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to move product to shipping"]);
    }

    $stmt1->close();
    $stmt2->close();
    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
