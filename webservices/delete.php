<?php
    include_once('config.php');
    $id = $_GET['id'];
    if (!empty($id)) {
        $sql = "DELETE FROM tbl_posts WHERE id = '$id'";
        $query = $con->query($sql);
        if ($query) {
            $result = array("status"=> 1, "msg"=> "Post Deleted Successfully");
        } else {
            $result = array("status"=> 1, "msg"=> "Failed to Delete Post!");
        }
        @mysql_close();
        header('Content-type: application/json');
        echo json($result);
    }
 ?>
