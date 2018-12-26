<?php
    define('BASE_PATH', 'http://localhost/spa-app/webservices');
    define('DB_HOST', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', 'phpmyadmin');
    define('DB_NAME', 'angularjscrud');
    $con = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if (mysqli_connect_errno()) {
        echo "Error: " .mysqli_connect_error();
        exit();
    }
 ?>
