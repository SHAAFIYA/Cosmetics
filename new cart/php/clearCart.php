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

    $sql = "DELETE FROM user_carts WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Error clearing cart"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
