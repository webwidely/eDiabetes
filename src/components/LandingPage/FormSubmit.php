<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullName = isset($_POST['fullName']) ? $_POST['fullName'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $whatsappNumber = isset($_POST['whatsappNumber']) ? $_POST['whatsappNumber'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : 'Contact Form Submission';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Email recipient
    $to = "diabetestelehealth@gmail.com";
    $email_subject = "New Message from: " . $fullName;

    // Create email body
    $email_body = "You have received a new message from the contact form on your website.\n\n" .
                  "Here are the details:\n" .
                  "Full Name: $fullName\n" .
                  "Email: $email\n" .
                  "WhatsApp Number: $whatsappNumber\n" .
                  "Subject: $subject\n" .
                  "Message:\n$message";

    // Email headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Success! Your message has been sent.";
    } else {
        echo "Error: Unable to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
