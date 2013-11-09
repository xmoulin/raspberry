<?php 
// on se connecte à MySQL 
$db = mysql_connect('localhost', 'root', ''); 

// on sélectionne la base 
mysql_select_db('monitoring',$db); 

// on execute la requete
$sth =  mysql_query("SELECT pk,iteration,temperatureEau,temperature, humidity, date FROM indicateur");

$rows = array();
while($r = mysql_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);

// on ferme la connexion à mysql 
mysql_close(); 
?> 

<?php

// Database Connection

$host="localhost";
$uname="root";
$pass="";
$database = "monitoring"; 

$connection=mysql_connect($host,$uname,$pass); 

echo mysql_error();

//or die("Database Connection Failed");
$selectdb=mysql_select_db($database) or 
die("Database could not be selected"); 
$result=mysql_select_db($database)
or die("database cannot be selected <br>");

// Fetch Record from Database

$output = "";
$table = "indicateur"; // Enter Your Table Name 
$sql = mysql_query("select * from $table");
$columns_total = mysql_num_fields($sql);

// Get The Field Name
/*
for ($i = 0; $i < $columns_total; $i++) {
$heading = mysql_field_name($sql, $i);
$output .= '"'.$heading.'",';
}
$output .="\n";
*/

$output .="pk,iteration,temperatureEau,temperature,humidity,date\n";

// Get Records from the table

while ($row = mysql_fetch_array($sql)) {
for ($i = 0; $i < $columns_total; $i++) {
$output .='"xav'.$row["$i"].'",';
}
$output .="\n";
}

// Download the file

$filename = "exportMonitoringData.csv";
header('Content-type: application/csv');
header('Content-Disposition: attachment; filename='.$filename);

echo $output;
exit;

?>