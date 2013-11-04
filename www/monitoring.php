<?php 
// on se connecte à MySQL 
$db = mysql_connect('localhost', 'root', ''); 

// on sélectionne la base 
mysql_select_db('monitoring',$db); 

//Récuperation parametre de la requete
if (isset($_GET['champ'])) {$champ = stripslashes(htmlspecialchars($_GET['champ']));}
if (isset($_GET['limit'])) {$limit = (int)stripslashes(htmlspecialchars($_GET['limit']));}
if (isset($_GET['offset'])) {$offset = (int)stripslashes(htmlspecialchars($_GET['offset']));}

//Creation de la requete:
$requete = "SELECT ";

if (!empty($champ)) {
	$requete = $requete . $champ;
} else {
	$requete = $requete . " temperatureEau,temperature, humidity, date ";
}
$requete = $requete . " FROM indicateur  Order by date ";

//LIMIT 5 OFFSET 10;  # Retourne les enregistrements 6 à 15
if (!empty($limit)) {
	$requete = $requete . " LIMIT $limit ";
}
if (!empty($offset)) {
	$requete = $requete . " OFFSET $offset ";
}
print($requete);

//on execute la requete
$sth =  mysql_query($requete);

$rows = array();
while($r = mysql_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);

// on ferme la connexion à mysql 
mysql_close(); 
?> 