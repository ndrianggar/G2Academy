<?php

// $a = 6;
// for ($i ; $a< 128; $a+=6){
// echo "$a";
//  echo " ";
// }

// for($i=7; $i>=5; $i--){
// 	if ($i % 2) {
// 		echo $i;
// 	}
// }


$max = 5;
for ($i=0; $i < $max; $i++)
{
	for ($j = $max-$i; $j <= $max; $j++)
	{
		echo $j;
	}
	echo '<br/>';
}
?>
