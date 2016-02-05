<?php
  header("HTTP/1.1 301 Moved Permanently");
  header("Location: http://" . $_SERVER['HTTP_HOST'] . "/somewhere-else/");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page not found</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>The page you are looking for no longer exists.</h1>
    <p><a href="<?php print "http://" . $_SERVER['HTTP_HOST'] . "/somewhere-else/"; ?>">Please follow this link if you are not automatically re-directed</a></p>
  </body>
</html>