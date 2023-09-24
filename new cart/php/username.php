<?php
session_start();
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

$conn = connectToDatabase();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $input = json_decode(file_get_contents("php://input"));

    $email = filter_var($input->email, FILTER_SANITIZE_EMAIL);
    
    $sql = "SELECT first_name FROM user_details WHERE email = ? ";
    $stmt = $conn->prepare($sql);
    
    // Bind the email parameter
    $stmt->bind_param("s", $email); // Use $email, not $userId
    $stmt->execute();
    
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $userFirstName = $row['first_name'];
        echo json_encode(['userFirstName' => $userFirstName]); // Return user's first name as JSON
    }
    $stmt->close();
    $conn->close();
}
?>
