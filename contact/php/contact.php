<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email address where the form submissions will be sent
    $to = "janekanglove@gmail.com";

    // Subject of the email
    $subject = "Contact The Matcha Blog";

    // Email content
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $email_body)) {
        header("Location: contact.html?status=success");
        exit();
    } else {
        header("Location: contact.html?status=error");
        exit();
    }
} else {
    header("Location: contact.html");
    exit();
}
?>
