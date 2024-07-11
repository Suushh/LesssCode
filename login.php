<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">  
    <style>
        .content {
            padding-top: 20%;
        }
    </style> 
</head>
<body>
    <div class="content">
        <div class="row justify-content-center">
            <div class="col-md-6 col-md-offset-3" align="center" >
                <?php
                    if (isset($_POST["Login"])){
                        $usern=$_POST["username"];
                        $pass=$_POST["password"];
                        require_once("./connectdb.php");
                        $sql="SELECT * FROM Users WHERE username='$usern'";
                        $result = $conn->query($sql);
                        $user=mysqli_fetch_array($result,MYSQLI_ASSOC);
                        if($user){
                            $pic=$user["profile_pic"];
                            if(password_verify($pass, $user["password"])){
                                echo $usern;
                                $_SESSION['user'] = $usern; 
                                $_SESSION['id']=$user["id"];
                                echo $_SESSION['user'];
                                header("Location: home.php");
                                die();
                            }else{
                                echo "<div class='alert alert-danger'>Wrong Password!</div>";
                            }
                        }
                        else{
                            echo "<div class='alert alert-danger'>U are not signed up!</div>";
                        }
                    }
                ?>
                 <form action="login.php" method="POST" action="home.php">
                    <input type="text" name="username" class="form-control" placeholder="Enter username"><br>
                    <input type="password" name="password" class="form-control" placeholder="Enter password"><br>
                    <input type="submit" name="Login" value="Login" class="btn btn-primary">
                 </form>               
                 <br>Haven't signed up already?Sign up here!!<br>
                 <a href="sign_up.php">Sign up</a>
            </div> 
        </div>
    </div>
</body>
</html>