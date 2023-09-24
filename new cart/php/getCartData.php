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

    $conn = connectToDatabase();

    // Use prepared statement to prevent SQL injection
    $sql = "SELECT * FROM user_carts WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $cartData = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $cartData[] = [
                "product_name" => $row["product_name"],
                "quantity" => $row["quantity"]
            ];
        }
    }

    echo json_encode($cartData);

    $stmt->close();
    $conn->close();
} else {
    // Handle invalid request method
    echo json_encode(["error" => "Invalid request method"]);
}
?>
