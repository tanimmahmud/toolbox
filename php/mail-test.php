<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PHP Mail Test</title>
    <meta charset="utf-8">
  </head>
  <body>
    <?php
      $to = 'person@example.com';
      $subject = 'Test Email';

      $headers = '';
      $headers .= 'From: Jane Doe <noreply@example.com>' . "\r\n";
      $headers .= 'Reply-To: noreply@example.com' . "\r\n";
      $headers .= 'X-Mailer: PHP/' . phpversion();
      	  
      $body = 'This is a test message.' . "\n\n";
      	
      if (mail($to, $subject, $body, $headers)) {
      	print '<p>Success</p>';
      } else {
      	print '<p>Failure</p>';
      }
    ?>
  </body>
</html>