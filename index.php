<?php

gallery_log();

function gallery_log() {
    $log = date("Y-m-d H:i:s") . PHP_EOL;
    $path = "logs/log.txt";
    if (count(file($path)) > 9) {
        $logsNumber = count(array_slice(scandir('logs'), 2)) - 1;
        rename($path, "logs/log" . $logsNumber . ".txt");
    }
    file_put_contents($path, $log, FILE_APPEND);
}

function createGallery()
{
    foreach (array_slice(scandir("img/big"), 2) as $image) {
        echo '<a target="_blank" href="img/big/' . $image . '">
        <img src="img/small/' . $image . '" alt="image"></a>';
    }
}

function checkFile() {
    $imgName = "img/big/" . basename($_FILES["img_file"]["name"]);
    if (file_exists($imgName)) {
        echo "Файл с таким названием уже существует!";
        return false;
    }
    $imgSize = getimagesize($_FILES["img_file"]["tmp_name"]);
    if ($imgSize['mime'] != 'image/jpeg') {
        echo "Файл должен быть формата jpg!";
        return false;
    }
    if ($_FILES["img_file"]["size"] > 1024 * 1024 * 5) {
        echo "Размер файла не должен превышать 5 МБ!";
        return false;
    }
    return true;
}

if (!empty($_FILES)) {
    $path = "img/big/" . $_FILES["img_file"]["name"];
    if (checkFile() && move_uploaded_file($_FILES["img_file"]["tmp_name"], $path)){
        $img = imagecreatefromjpeg($path);
        $imgScale = imagescale($img , 200);
        imagejpeg($imgScale, "img/small/" . $_FILES["img_file"]["name"]);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lesson19</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="img_file">
        <input type="submit" value="Загрузить">
    </form>
    <?php createGallery() ?>
</body>
</html>