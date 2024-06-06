<?php

$title = "title";
$h1 = "h1";
$year = date("Y");

function getTime(){
    $hours = date("H");
    $minutes = date("i");

    $resultTime = $hours;

    if ($hours == 1 || $hours == 21) 
        $resultTime .= " час ";
    else if (($hours >=5 && $hours <=20) || ($hours == 0))
        $resultTime .= " часов ";
    else $resultTime .= " часа ";

    $resultTime .= $minutes;
    
    $divMinutes = $minutes % 10;
    if ($divMinutes == 0)  
        $divMinutes = 10; 

    if (($minutes >=11 && $minutes <= 14) || ($divMinutes >= 5 && $divMinutes <= 10))
        $resultTime .= " минут";
    else if ($divMinutes == 1) 
        $resultTime .= " минута";
    else $resultTime .= "минуты";

    return $resultTime;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?></title>
</head>
<body>
    <h1><?php echo $h1 ?></h1>
    <p><?php echo $year ?></p>
    <p><?php echo getTime() ?></p>
</body>
</html>