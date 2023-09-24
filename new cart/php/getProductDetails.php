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
    $productname = filter_var($input->product_name, FILTER_SANITIZE_STRING);

    $conn = connectToDatabase();

    // Use prepared statement to prevent SQL injection
    $sql = "SELECT * FROM products WHERE product_name = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $productname);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Ensure that the price is converted to a float
        $price = (float)$row["price"];

        $productDetails = [
            "name" => $row["product_name"],
            "price" => $price,
            "image_name" => $row["image_name"]
        ];
        echo json_encode($productDetails);
    } else {
        // Handle the case where the product is not found
        echo json_encode(["error" => "Product not found"]);
    }

    $stmt->close();
    $conn->close();
} else {
    // Handle invalid request method
    echo json_encode(["error" => "Invalid request method"]);
}
?>
