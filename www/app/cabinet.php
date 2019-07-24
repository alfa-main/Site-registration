<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
     <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="shortcut icon" href="iconfinder_user.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>user cabinet</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
               <h1 class="user__cabinet">User Page</h1> 
            </div>
            <div class="col l12 center-align">
               <button id="logout" class="waves-effect waves-light btn-large"><i class="material-icons right">exit_to_app</i>Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col l6">
                <form>
                    <div class="input-field col s6">
                        <input  id="signup__name" type="text" class="validate">
                        <label class="active" for="signup__name">Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input  id="signup__pass" type="text" class="validate">
                        <label class="active" for="signup__pass">Password</label>
                    </div>
                    <div class="input-field col s12">
                        <input  id="signup__birthday" type="text" class="datepicker">
                        <label class="active" for="signup__birthday">Birthday</label>
                    </div>
                    <div class="col l12">
                        <p>
                            <label>
                               <input name="sex" value="male" type="radio" class="sex"checked />
                               <span>male</span>
                            </label>
                        </p>
                        <p>
                            <label>
                               <input name="sex" value="female" type="radio" class="sex" />
                               <span>female</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input class="sex" value="other" name="sex" type="radio"  />
                                <span>other</span>
                            </label>
                        </p>
                    </div>
                    <div class="col l12 right-align">
                        <button id="signup__submit" class="waves-effect waves-light btn-large"><i class="material-icons right">save_alt</i>Update </button>
                    </div>            
                   
                </form>
            </div>
        </div>
    </div>
    
    <script src="script/js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/form.js"></script>
    <script src="script/logout.js"></script>
</body>

</html>