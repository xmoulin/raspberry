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

//on execute la requete
//print($requete);
$sth =  mysql_query($requete);

$rows = array();
while($r = mysql_fetch_assoc($sth)) {
    $rows[] = $r;
}
//print_r($rows);
//On format le resultat. Soit tous les champs separée par une virgule, soit tous le flux en json
if (!empty($champ)) {
	//foreach($rows as $element)
	//On affiche le permier element pour pas avoir a gerer le ',' en fin de ligne
	$values = array();
	$n =count($rows);
	for ($numero = 0; $numero < $n; $numero++)
	{
		array_push($values, intval($rows[$numero][$champ]));
	}
	echo json_encode($values);
} else {
	print json_encode($rows);
}

// on ferme la connexion à mysql 
mysql_close(); 
?> 