<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$username = $data['username']; 
$password = $data['password']; 


    $check_user = mysqli_query($con,"SELECT * from user WHERE username='$username' ");
    $row = $check_user->fetch_assoc();
    if($row['password'] != $password){
        //decrypting password 
        $hash = $row['password'];
        $verification = password_verify($password,$hash);

        http_response_code(201);
		$message['status'] = "Success";
    }else{
        http_response_code(422);
		$message['status'] = "Error";
    }
    
    print json_encode($row);
    mysqli_close($con);
