<?php 
// on se connecte à MySQL 
$db = mysql_connect('localhost', 'root', ''); 

// on sélectionne la base 
mysql_select_db('monitoring',$db); 

// on crée la requête SQL 
$sql = 'SELECT pk,iteration,temperatureEau,temperature, humidity FROM indicateur'; 

// on envoie la requête 
$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error()); 

// on fait une boucle qui va faire un tour pour chaque enregistrement 
while($data = mysql_fetch_assoc($req)) 
    { 
    // on affiche les informations de l'enregistrement en cours 
    echo '<b>'.$data['pk'].' '.$data['iteration'].'</b> ('.$data['temperatureEau'].')'; 
    echo ' <i>temperature : '.$data['temperature'].'</i> <i>humidity : '.$data['humidity'].'</i><br>'; 
    } 

// on ferme la connexion à mysql 
mysql_close(); 
?> 