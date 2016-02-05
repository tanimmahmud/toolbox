<?php

$db_host = 'db_host'; // Usually "localhost"
$db_name = 'db_name';
$db_user = 'db_user';
$db_pass = 'db_pass';

// Connect to the database
 
$connection = mysql_connect($db_host, $db_user, $db_pass) or die('Error! Database connection failed: ' . mysql_error());
print 'Connected to MySQL<br />';

// Select the database

$selected = mysql_select_db($db_name, $connection) or die('Error! Unable to select database: ' . mysql_error());
print 'Database Selected<br />';

// Close the connection

mysql_close($connection);
print 'Connection Closed';

?>