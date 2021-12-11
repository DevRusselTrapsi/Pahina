<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

//data
$name = 	$data['name']; 
$email = 	$data['email'];
$username = $data['username']; 
$password = $data['password']; 

//password encryption
$hash = password_hash($password,PASSWORD_DEFAULT);

		$query = "INSERT INTO user (name,email,username,password) 
							 VALUES('$name','$address','$email','$username') ";

		if(mysqli_query($con, $query)){
			http_response_code(201);
			$message['status'] = "SUCCESS";

		}else{
			http_response_code(422);
			$message['status'] = "ERROR";
		}
		
	print json_encode($message);
	mysqli_close($con);