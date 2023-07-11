<?php
$host = 'db5013637590.hosting-data.io';
$database = 'dbs11422374';
$username = 'dbu1053453';
$password = 'DronesRUs6^@^8135';

// Create a new mysqli instance
$link = new mysqli($host, $username, $password, $database);

// Check the connection
if ($link->connect_error) {
    die('Connect Error: ' . $link->connect_error);
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Prepare the SQL statement
    $stmt = $link->prepare("INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)");

    // Bind the values to the parameters
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    // Execute the prepared statement
    if ($stmt->execute()) {
        $url = "https://www.azdronephotography.com/contact-confirm.html";
        header("Location:  $url");
    } else {
        echo "There has been an error: " . $stmt->error;
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$link->close();
exit();

?>