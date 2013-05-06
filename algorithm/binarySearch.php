<?php

/**
 * 二分查找
 * @auth shendegang
 * @param array $items 传入的数组
 * @param mixed $value 查询的字符
 * @return mixed 返回数组的位数
 */ 
function binarySearch($items, $value)
{
    $startIndex = 0;
    $stopIndex = count($items) -1;
    $middle = intval(($startIndex+$stopIndex)/2);

    while($items[$middle] != $value && $startIndex<$stopIndex)
    {
        if($value < $items[$middle])
            $stopIndex = $middle - 1;
        elseif($value > $items[$middle])
            $startIndex = $middle + 1;

        $middle = intval(($stopIndex + $startIndex)/2);
    }

    return ($items[$middle] != $value) ? -1 : $middle;
}

$items = array("a", "b", "c","c","e","f","g","h","i","j" );
echo binarySearch($items, "c");

if("a" < "b")
    echo 'da';

