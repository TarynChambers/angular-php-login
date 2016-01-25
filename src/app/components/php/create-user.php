<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inventory";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$username = $request->username;
$password = $request->password;
$today = date("Y-m-d");

$sql = "INSERT INTO users (username, password, date)
VALUES ('$username', '$password', '$today')";

if ($conn->query($sql) === TRUE) {
    return true;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>
