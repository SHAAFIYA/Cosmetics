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

$success = false;
$message = "";

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the JSON data from the request body
    $input = json_decode(file_get_contents("php://input"));

    $email = filter_var($input->email, FILTER_SANITIZE_EMAIL);
    $productname = filter_var($input->product_name, FILTER_SANITIZE_STRING);

    // Create a database connection
    $conn = connectToDatabase();

    // Prepare and execute the SQL query to insert data (customize the table name and column names)
    $sql = "INSERT INTO user_carts (email, product_name) VALUES ('$email', '$productname')"; // Corrected SQL query

    try {
        if ($conn->query($sql) === TRUE) {
            $success = true;
            $message = "Product added to cart successfully!";
        } else {
            throw new Exception("Error: " . $conn->error);
        }
    } catch (Exception $e) {
        $success = false;
        $message = "An error occurred. " . $e->getMessage();
    }

    // Close the database connection
    $conn->close();
} else {
    $success = false;
    $message = "Invalid request method.";
}

// Prepare and send the response
$response = [
    "success" => $success,
    "message" => $message
];

echo json_encode($response);
?>
