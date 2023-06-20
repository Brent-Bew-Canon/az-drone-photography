<?php
$Name = $_POST['Name'];
$Email = $_POST['Email'];


// db connection
$conn = new mysqli('localhost', 'root', 'fY-6^uC-2^wK-9)eW-9^hZ-6(', 'php_test');
if ($conn->connect_error) {
    die('Connection Failed  : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO schedule (Name, Email) VALUES (?, ?)");
    $stmt->bind_param("ss", $Name, $Email);
    $stmt->execute();
    echo "form submitted!";
    $stmt->close();
    $conn->close();
}
?>