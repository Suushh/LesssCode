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
    .content {
        font-family: 'Arial', sans-serif;
        background: rgb(255, 227, 232);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
    .container {
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 400px;
        justify-content: space-around;
        min-height: 480px;
        margin: 0;
    }
    h1 {
        font-weight: bold;
            
    }
    .btn-custom {
        border: 1px solid white;
        background-color: rgb(202, 6, 104);
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
    }
    .btn-custom:active {
        transform: scale(0.95);
    }
    .btn-custom:focus {
        outline: none;
    }
    </style>
</head>
<body>
    <div class="content">
    <div class="row justify-content-center">
            <div align="center"  >
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
            <div class="container">
            <h1>Sign Up</h1>
            <form action="sign_up.php" method="POST" enctype="multipart/form-data">
                
                <input type="text" name="username" placeholder="Enter username" class="form-control"><br>
                
                <input type="password" name="password" placeholder="Enter password" class="form-control"><br>
                
                <input type="password" name="confirm_password" placeholder="Confirm password" class="form-control"><br>
                <label>Profile Picture</label>
                <input type="file" name="profile" class="form-control"><br>
                <input type="submit" value="Sign up" class="btn-custom" name="submit"><br>
            </form>
            </div>

           



    </div>
</div>
</div>
</body>
</html>
