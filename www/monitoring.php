<?php 
// on se connecte à MySQL 
$db = mysql_connect('localhost', 'root', ''); 

// on sélectionne la base 
mysql_select_db('monitoring',$db); 

// on execute la requete
$sth =  mysql_query("SELECT temperatureEau,temperature, humidity, date FROM indicateur");

$rows = array();
while($r = mysql_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);

// on ferme la connexion à mysql 
mysql_close(); 
?> 