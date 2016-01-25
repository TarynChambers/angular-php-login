<?php
// get post data
$postdata = file_get_contents("php://input");

// decode post data
$request = json_decode($postdata);

// put post data into php vars
$username = $request->username;
$password = $request->password;

//echo $json_response = json_encode($username);
require_once 'db.php'; // The mysql database connection script

// query the db
$query="SELECT * from users WHERE username='$request->username' and password='$request->password'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

// fetch results
if($result->num_rows > 0) { // if result is found
  $row = $result->fetch_assoc();
} else { // no result found return json object
  $row = array('error' => true, 'message' => 'incorrect username or password');
}

// JSON-encode the response
header('Content-Type: application/json');

// send the data back
echo $json_response = json_encode($row);

// close the db connection
$mysqli->close();

?>
