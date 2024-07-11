<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous"> 
    <title>Document</title>
    <style>
    .content{
        max-width: 800px;
        margin: 0 auto;
        padding-top: 20%;
    }
    </style>
</head>
<body>
    <div class="content">
    <div class="row justify-content-center">
            <div class="col-md-6 col-md-offset-3"  >
                <?php
                    if(isset($_POST["submit"])){

                        $pname=$_FILES['profile']['name'];
                        $path =  "upload/".$pname;
                        move_uploaded_file($_FILES['profile']['tmp_name'], $path);
                    

                    $user=$_POST["username"];
                    $pass=$_POST["password"];
                    $c_pass=$_POST["confirm_password"]; 
                    $passwordHash=password_hash($pass,PASSWORD_DEFAULT);
                    $error=array();
                    if(empty($user) or empty($pass) or empty($c_pass)){
                        array_push($error,"All fields are required");
                    }
                    if($pass!=$c_pass){
                        array_push($error,"Password does not match");
                    }
                    require_once('./connectdb.php');
                    $sql="SELECT * FROM Users WHERE username='$user'";
                    $result = $conn->query($sql);   
                    if ($result->num_rows > 0)
                    array_push($error,"Username already exists!");
                    if(count($error)>0){
                        foreach($error as $err){
                            echo "<div class='alert alert-danger'>$err</div>";
                        }
                    }
                    else{
                            require_once('./connectdb.php');
                            $sql="INSERT INTO Users (username, password, profile_pic)
                                    VALUES ('$user','$passwordHash','$pname')";
                            if ($conn->query($sql) === TRUE) {
                                // echo "<div class='alert alert-success'>Sign-in successfull</div>";
                                $_SESSION['user'] = $user; 
                                header("Location:home.php");
                            } else {
                                die ("Something went wrong.");
                            }
                    }
                }
                ?>
            <form action="sign_up.php" method="POST" enctype="multipart/form-data">
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter username" class="form-control"><br>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" class="form-control"><br>
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Confirm password" class="form-control"><br>
                <label>Profile Picture</label>
                <input type="file" name="profile" class="form-control"><br>
                <input type="submit" value="Sign up" class="btn btn-primary" name="submit"><br>
            </form>

           



    </div>
</div>
</div>
</body>
</html>