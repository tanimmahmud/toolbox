<?php

$db_host = 'db_host'; // Usually "localhost"
$db_name = 'db_name';
$db_user = 'db_user';
$db_pass = 'db_pass';

// ----------------------------------------
// PHP Settings
// ----------------------------------------

ini_set('magic_quotes_runtime', 0);
ini_set('magic_quotes_sybase', 0);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('error_reporting', E_ALL); // error_reporting(E_ALL | E_STRICT);

// ----------------------------------------
// Connect to database
// ----------------------------------------

// Detect PHP version (see http://php.net/manual/en/function.phpversion.php)

$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

if (strnatcmp(phpversion(), '5.2.9') >= 0) {
  // This is the "official" OO way to do it, but $connect_error was broken until PHP 5.2.9 and 5.3.0.
  if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
  }
} else {
  // Use this instead of $connect_error if you need to ensure compatibility with PHP versions prior to 5.2.9 and 5.3.0.
  if (mysqli_connect_error()) {
    die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
  } 
} 
print 'Connected to database: ' . $mysqli->host_info . '<br />';

// ----------------------------------------
// Close connection
// ----------------------------------------

$closed = $mysqli->close();
if (!$closed) {
  die('Error! Database connection could not be closed');
}
print 'Database connection closed';

?>