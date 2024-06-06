<?php

$a = 7;
$b = 3;

echo "а = " . $a . "; b = " . $b;

echo "<br>";

echo "Задание 1: ";

if ($a >= 0 && $b >= 0) 
    echo $a - $b;
else if ($a < 0 && $b < 0) 
    echo $a * $b;
else echo $a + $b;

echo "<br>";

echo "Задание 2: ";

$result = "";

switch($a) {
    case 0:
        $result .= "0; ";
    case 1:
        $result .= "1; ";
    case 2:
        $result .= "2; ";
    case 3:
        $result .= "3; ";
    case 4:
        $result .= "4; ";
    case 5:
        $result .= "5; ";
    case 6:
        $result .= "6; ";
    case 7:
        $result .= "7; ";
    case 8:
        $result .= "8; ";
    case 9:
        $result .= "9; ";
    case 10:
        $result .= "10; ";
    case 11:
        $result .= "11; ";
    case 12:
        $result .= "12; ";
    case 13:
        $result .= "13; ";
    case 14:
        $result .= "14; ";
    case 15:
        $result .= "15";
        break;
    default:
        $result = "Значение не входит в промежуток";
        break;
}

echo $result;

echo "<br>";

echo "Задание 3: ";

function getSum($a, $b){
    return $a + $b;
}

function getDif($a, $b){
    return $a - $b;
}

function getDiv($a, $b){
    return round($a / $b, 3);
}

function getMult($a, $b){
    return $a * $b;
}

echo "сумма: " . getSum($a, $b) . "; разность: " . getDif($a, $b) . 
    "; частное: " . getDiv($a, $b) . "; произведение: " . getMult($a, $b);

echo "<br>";

echo "Задание 4: ";

function mathOperation($arg1, $arg2, $operation){
    switch ($operation){
        case "сложение":
            return getSum($arg1, $arg2);
            break;
        case "вычитание":
            return getDif($arg1, $arg2);
            break;
        case "умножение":
            return getMult($arg1, $arg2);
            break;
        case "деление":
            return getDiv($arg1, $arg2);
            break;
        default:
            return "операция не найдена";
            break;
    }
}

echo "сумма: " . mathOperation($a, $b, "сложение") . "; разность: " . mathOperation($a, $b, "вычитание") . 
    "; частное: " . mathOperation($a, $b, "деление") . "; произведение: " . mathOperation($a, $b, "умножение") .
    "; другая операция: " . mathOperation($a, $b, "другая операция");

echo "<br>";

echo "Задание 6: ";

function power($val, $pow){
    if ($pow == 1) return $val;
    return $val * power($val, $pow - 1);
}

echo power($a, $b);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <h3>Задание 5</h3>   
    <p><?php echo date("Y")?></p>
    <?php
        $year = date('Y');
        $content = file_get_contents('date.html');
        $result = str_replace('{{ year }}', $year, $content);
        echo $result;
    ?>
    <?php require('date.php') ?>
</body>
</html>