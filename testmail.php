<?php
$to      = 'info@empeccableweb.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: admin@empeccableweb.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo 'Mail Sent.';
?>