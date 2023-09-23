<?php
header("Content-Type: application/json");

// Function to establish a database connection
function connectToDatabase() {
    $servername = "localhost"; // Replace with your database server name
    $username = "root"; // Replace with your database username
    $password = ""; // Replace with your database password
    $database = "beauty_elixer"; // Replace with your database name

    $conn = new mysqli($servername, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

// Initialize success and message variables
$success = false;
$message = "";

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the JSON data from the request body
    $input = json_decode(file_get_contents("php://input"));

    // Validate and sanitize form fields (add more validation as needed)
    $firstName = filter_var($input->firstName, FILTER_SANITIZE_STRING);
    $lastName = filter_var($input->lastName, FILTER_SANITIZE_STRING);
    $phoneNumber = filter_var($input->phoneNumber, FILTER_SANITIZE_STRING);
    $email = filter_var($input->email, FILTER_SANITIZE_EMAIL);
    $password = filter_var($input->password, FILTER_SANITIZE_STRING);


    // Create a database connection
    $conn = connectToDatabase();

    // Prepare and execute the SQL query to insert data (customize the table name and column names)
    $sql = "INSERT INTO user_details (first_name, last_name, phone_number, email, pass) 
            VALUES ('$firstName', '$lastName', '$phoneNumber', '$email', '$password')";

    try {
        if ($conn->query($sql) === TRUE) {
            $success = true;
            $message = "Registration successful!";
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
