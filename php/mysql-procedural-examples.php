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

$connection = mysql_connect($db_host, $db_user, $db_pass);
if (!$connection) {
  die('Error! Database connection failed: ' . mysql_error());
}
print 'Connected to database<br />';

// ----------------------------------------
// Select database
// ----------------------------------------

$selected = mysql_select_db($db_name, $connection);
if (!$selected) {
  die('Error! Unable to select database: ' . mysql_error());
}
print 'Database selected<br />';

// ----------------------------------------
// Select all records
// ----------------------------------------

// mysql_real_escape_string() should be used to sanitize variables in the query string
// (and also stripslashes(), if magic_quotes_gpc is enabled)

$result = mysql_query('SELECT * FROM people', $connection);
if (!$result) {
  die('Error! Invalid query: ' . mysql_error());
}

// See also mysql_result(), mysql_fetch_array(), mysql_fetch_object(), mysql_fetch_row(), etc.

while ($row = mysql_fetch_assoc($result)) {
  print '<hr />';
  print 'pid: ' . $row['pid'] . '<br />';
  print 'jid: ' . $row['jid'] . '<br />';
  print 'name: ' . $row['name'] . '<br />';
  print 'email: ' . $row['email'] . '<br />';
  print 'bio: ' . $row['bio'] . '<br />';
  print 'date: ' . $row['date'];
}
mysql_free_result($result);

print '<hr />';

// ----------------------------------------
// Insert record
// ----------------------------------------

// date('Y-m-d H:i:s') format is quivalent to the MySQL NOW() function

$inserted = mysql_query("INSERT INTO people (jid, name, email, bio, date) VALUES (2, 'Larry Smith', 'larry@smith.com', 'My name is Larry.', '" . date('Y-m-d H:i:s') . "')", $connection);
if (!$inserted) {
  die('Error! Unable to insert record: ' . mysql_error());
}
print 'Record inserted successfully<br />';

// ----------------------------------------
// Update record
// ----------------------------------------

$updated = mysql_query("UPDATE people SET email = 'larry_smith@website.org', bio = 'My email address has changed.' WHERE name = 'Larry Smith'", $connection);
if (!$updated) {
  die('Error! Unable to update record: ' . mysql_error());
}
print 'Record updated successfully<br />';

// ----------------------------------------
// Delete record
// ----------------------------------------

$deleted = mysql_query("DELETE FROM people WHERE name = 'Larry Smith'", $connection);
if (!$deleted) {
  die('Error! Unable to delete record: ' . mysql_error());
}
print 'Record deleted successfully<br />';

// ----------------------------------------
// Perform a Join on multiple tables
// ----------------------------------------

$result2 = mysql_query('SELECT * FROM people pl JOIN jobs jb WHERE pl.jid = jb.jid', $connection);
if (!$result2) {
  die('Error! Invalid query: ' . mysql_error());
}
while ($obj = mysql_fetch_object($result2)) {
  print '<hr />';
  print 'pid: ' . $obj->pid . '<br />';
  print 'name: ' . $obj->name . '<br />';
  print 'email: ' . $obj->email . '<br />';
  print 'bio: ' . $obj->bio . '<br />';
  print 'date: ' . $obj->date . '<br />';
  print 'jid: ' . $obj->jid . '<br />';
  print 'title: ' . $obj->title . '<br />';
  print 'description: ' . $obj->description;
}
mysql_free_result($result2);

print '<hr />';

// ----------------------------------------
// Close connection
// ----------------------------------------

$closed = mysql_close($connection);
if (!$closed) {
  die('Error! Database connection could not be closed');
}
print 'Database connection closed';

?>