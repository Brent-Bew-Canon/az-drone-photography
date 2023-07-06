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
    $month = $_POST['month'];
    $day = $_POST['day'];
    $time = $_POST['time'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $redirect = $_POST['redirect'];

    // Prepare the SQL statement
    $stmt = $link->prepare("INSERT INTO calendar (month, day, time, name, email, service, redirect) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Bind the values to the parameters
    $stmt->bind_param("sssssss", $month, $day, $time, $name, $email, $service, $redirect);

    // Execute the prepared statement
    if ($stmt->execute()) {
        //TODO: make this redirect to the correct payment page
        header("Location:  $redirect");
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