<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form fields and sanitize them
    $fullName = filter_var($_POST['fullName'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $whatsappNumber = filter_var($_POST['whatsappNumber'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Set the recipient email address (your email address)
    $to = "diabetestelehealth@gmail.com"; // Replace with your email address

    // Build the email content
    $emailSubject = $subject; // Subject comes from the form field
    $emailBody = "You have received a new message from the contact form.\n\n";
    $emailBody .= "Full Name: $fullName\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "WhatsApp Number: $whatsappNumber\n";
    $emailBody .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $fullName <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send the email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        // Success message
        echo "success";
    } else {
        // Failure message
        echo "error";
    }

} else {
    // If accessed directly without form submission
    echo "error";
}
?>
