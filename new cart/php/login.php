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

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the JSON data from the request body
    $input = json_decode(file_get_contents("php://input"));

    // Validate and sanitize form fields (add more validation as needed)
    $email = filter_var($input->email, FILTER_SANITIZE_EMAIL);
    $password = filter_var($input->password, FILTER_SANITIZE_STRING);

    // Create a database connection
    $conn = connectToDatabase();

    // Prepare and execute the SQL query to check if the user exists
    $sql = "SELECT * FROM user_details WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result) {
        // Check if a user with the provided email exists
        if ($result->num_rows === 1) {
            $row = $result->fetch_assoc();
            $storedPassword = $row['pass'];

            // Verify the provided password against the stored password
            if (($password === $storedPassword)) {
                $success = true;
                $message = "Login successful!";
            } else {
                $success = false;
                $message = "Incorrect password.";
            }
        } else {
            $success = false;
            $message = "User not found.";
        }
    } else {
        $success = false;
        $message = "Error: " . $conn->error;
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
