<?php
$Service = $_POST['service'];
$Name = $_POST['name'];
$Email = $_POST['email'];
$Phone = $_POST['phone'];
$Message = $_POST['message'];
$host_name = 'db5013637590.hosting-data.io';
$database = 'dbs11422374';
$user_name = 'dbu1053453';
$password = 'DronesRUs6^@^8135';

$link = new mysqli($host_name, $user_name, $password, $database);

if ($link->connect_error) {
    die('<p>Failed to connect to MySQL: ' . $link->connect_error . '</p>');
} else {
    echo '<p>Connection to MySQL server successfully established.</p>';
    $stmt = $link->prepare("INSERT INTO cart (service, name, email, phone, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $Service, $Name, $Email, $Phone, $Message);
    $stmt->execute();
    echo "form submitted!";
    $stmt->close();
    $link->close();
}
?>