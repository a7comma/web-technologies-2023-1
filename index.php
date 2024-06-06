<?php

echo "Задание 1 <br>";
$number = 0;
do{
    echo $number;
    if ($number == 0) echo " - это ноль";
    else if ($number % 2 == 0) echo " - четное число";
    else echo " - нечетное число";
    echo "<br>";
    $number++;
}
while($number <= 10);

echo "<br> Задание 2 <br>";
$country = array(
    "Московская область" => array("Москва", "Зеленоград", "Клин"),
    "Ленинградская область" => array("Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"),
    "Рязанская область" => array("Рязань", "Касимов", "Кораблино")
);
foreach($country as $k => $v){
    echo $k . ": <br>";
    echo implode(', ', $v) . '.<br>';
}

echo "<br> Задание 3 <br>";
function translate($word){
    $letters = array(
        "а" => "a",
        "б" => "b",
        "в" => "v",
        "г" => "g",
        "д" => "d",
        "е" => "e",
        "ё" => "e",
        "ж" => "zh",
        "з" => "z",
        "и" => "i",
        "й" => "i",
        "к" => "k",
        "л" => "l",
        "м" => "m",
        "н" => "n",
        "о" => "o",
        "п" => "p",
        "р" => "r",
        "с" => "s",
        "т" => "t",
        "у" => "u",
        "ф" => "f",
        "х" => "h",
        "ц" => "c",
        "ч" => "ch",
        "ш" => "sh",
        "щ" => "shh",
        "ъ" => "'",
        "ы" => "i",
        "ь" => "'",
        "э" => "e",
        "ю" => "yu",
        "я" => "ya"
    );
    $result = "";
    for($i = 0; $i < mb_strlen($word); $i++) 
        $result .= $letters[mb_substr($word, $i, 1)];
    return $result;
}
$word = "перевод";
echo $word . ": " . translate($word) . "<br>";

echo "<br> Задание 4 <br>";
$menu = [    
    [
        "title" => "1"
    ],
    [
        "title" => "2",
        "children" => [
            [
                "title" => "2.1"
            ],
            [
                "title" => "2.2"
            ]      
        ]
    ],
    [
        "title" => "3",
        "children" => [
            [
                "title" => "3.1",
                "children" => [
                    [
                        "title" => "3.1.1",
                    ],
                    [
                        "title" => "3.1.2",
                    ]
                ]
            ]
        ]
    ]
];
function createMenu($menu) {
    echo "<ul>";
    foreach ($menu as $child) {
        echo "<li>" . $child["title"];
        if (isset($child["children"])) 
            createMenu($child["children"]);
        echo '</li>';
    }
    echo "</ul>";
}
createMenu($menu);

echo "<br> Задание 6 <br>";
foreach($country as $k => $v){
    echo $k . ": <br>";
    $result = "";
    foreach($v as $city)
        if (mb_substr($city, 0, 1) == "К") 
            $result .= $city . ", ";
    $result = substr_replace($result, ".", -2);
    echo $result . '<br>';
}

?>