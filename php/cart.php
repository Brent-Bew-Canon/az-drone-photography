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
    $photos = $_POST['photos']; // Replace 'value1' with the name attribute of the input field
    $name = $_POST['name']; // Replace 'value2' with the name attribute of the input field
    $email = $_POST['email']; // Replace 'value3' with the name attribute of the input field
    $phone = $_POST['phone']; // Replace 'value3' with the name attribute of the input field
    $message = $_POST['message']; // Replace 'value3' with the name attribute of the input field

    // Prepare the SQL statement
    $stmt = $link->prepare("INSERT INTO cart (service, name, email, phone, message) VALUES (?, ?, ?, ?, ?)");

    // Bind the values to the parameters
    $stmt->bind_param("sssss", $photos, $name, $email, $phone, $message);

    // Execute the prepared statement
    if ($stmt->execute()) {
        // echo "Data inserted successfully, redirecting...";
        $url = "https://www.azdronephotography.com/calendar.html";
        $url .= "?name=" . urlencode($name);
        $url .= "&email=" . urlencode($email);
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