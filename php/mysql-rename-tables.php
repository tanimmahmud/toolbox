<?php

$db_host = 'db_host'; // Usually "localhost"
$db_name = 'db_name';
$db_user = 'db_user';
$db_pass = 'db_pass';

// Connect to the database

$connection = mysql_connect($db_host, $db_user, $db_pass);
if (!$connection) {
  die('Error! Database connection failed: ' . mysql_error());
}

// Select the database

$selected = mysql_select_db($db_name, $connection);
if (!$selected) {
  die('Error! Unable to select database: ' . mysql_error());
}

// Rename tables

$query = 'SHOW TABLES FROM ' . $db_name;
$result = mysql_query($query, $connection);

if (!$result) {
  die('Error! Invalid query: ' . mysql_error());
}
while ($row = mysql_fetch_row($result)) {
  $query2 = 'RENAME TABLE ' . $row[0] . ' TO prefix_' . $row[0];
  $result2 = mysql_query($query2);

  if (!$result2) {
    die('Error! Could not rename table: ' . $row[0] . '<br />' . mysql_error());
  }
  print 'Table renamed to: prefix_' . $row[0] . '<br />';
}
mysql_free_result($result);

?>