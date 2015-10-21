<?php
$text = $_POST["text"];
if($text) {
    $text = htmlspecialchars($text);
    $text .= "<br>";
    file_put_contents("file.txt", $text, FILE_APPEND);
    echo file_get_contents("file.txt");
} else {
    echo file_get_contents("file.txt");
}
?>
