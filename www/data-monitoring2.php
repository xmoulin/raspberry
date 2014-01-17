<?php 

// on se connecte à MySQL 
$db = mysql_connect('localhost', 'pi', 'raspberry'); 

// on sélectionne la base 
mysql_select_db('monitoring',$db); 

//Récuperation parametre de la requete
if (isset($_GET['champ'])) {$champ = stripslashes(htmlspecialchars($_GET['champ']));}
if (isset($_GET['champs'])) {$champs = stripslashes(htmlspecialchars($_GET['champs']));}
if (isset($_GET['limit'])) {$limit = (int)stripslashes(htmlspecialchars($_GET['limit']));}
if (isset($_GET['offset'])) {$offset = (int)stripslashes(htmlspecialchars($_GET['offset']));}
if (isset($_GET['periode'])) {$periode = stripslashes(htmlspecialchars($_GET['periode']));}

//Creation de la requete:
$requete = "SELECT ";

if (!empty($champ)) {
	$requete = $requete . $champ;
} else if (!empty($champs)) {
	$requete = $requete . $champs;
} else {
	$requete = $requete . " temperatureEau,temperature, humidity, date, sonMin, sonMax, sonMoy, gaz, lumiere  ";
}
$requete = $requete . " FROM indicateur ";

//Gestion de la periode
if (!empty($periode)) {
	$requete = $requete . " where ";
	if ($periode === "Heure") {
		$requete = $requete . " DATE_ADD( NOW( ) , INTERVAL -1 HOUR ) - date <= 0 ";
	} else if ($periode === "Journee") {
		$requete = $requete . " TO_DAYS(NOW()) - TO_DAYS(date) <= 0 ";
	} else if ($periode === "Semaine") {
		$requete = $requete . " TO_DAYS(NOW()) - TO_DAYS(date) <= 6 ";
	} else if ($periode === "Mois") {
		$requete = $requete . " TO_DAYS(NOW()) - TO_DAYS(date) <= 29 ";
	}
}
$requete = $requete . " Order by date desc";

//LIMIT 10 OFFSET 5;  # Retourne les enregistrements 6 à 15
if (!empty($limit)) {
	$requete = $requete . " LIMIT $limit ";
}
if (!empty($offset)) {
	$requete = $requete . " OFFSET $offset ";
}




//on execute la requete
//SELECT temperatureEau,temperature, humidity, date, sonMin, sonMax, sonMoy, gaz, lumiere FROM indicateur where DATE_ADD( NOW( ) , INTERVAL -1 HOUR ) - date <= 0 Order by date desc[]
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
