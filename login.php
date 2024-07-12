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
        p {
            font-size: 14px;
        
            margin: -10px 30px;
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
        a {
    color: rgb(202, 6, 104) ;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
    </style> 
</head>
<body>
    <div class="content">
        <div class="row justify-content-center">
            <div align="center">
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
                        } else {
                            echo "<div class='alert alert-danger'>U are not signed up!</div>";
                        }
                    }
                ?>
                <div class="container">
                    <h1>Login</h1>
                    <form action="login.php" method="POST">
                        <input type="text" name="username" class="form-control" placeholder="Enter username"><br>
                        <input type="password" name="password" class="form-control" placeholder="Enter password"><br>
                        <input type="submit" name="Login" value="Login" class="btn-custom"><br>
                    </form>               
                    <p>Haven't signed up already? <a href="sign_up.php">Sign up</a></p>
                    
                </div>
            </div> 
        </div>
    </div>
</body>
</html>
