<?php
/*
 * PHP code to export MySQL data to CSV
 * http://salman-w.blogspot.com/2009/07/export-mysql-data-to-csv-using-php.html
 *
 * Sends the result of a MySQL query as a CSV file for download
 */

/*
 * establish database connection
 */
$host="localhost";
$uname="root";
$pass="";
$database = "monitoring"; 
$table = "indicateur"; // Enter Your Table Name 


$conn = mysql_connect($host,$uname,$pass) or die(mysql_error());
mysql_select_db($database, $conn) or die(mysql_error($conn));

/*
 * execute sql query
 */

//$sql = mysql_query("select * from $table");

//$query = sprintf('SELECT * FROM $table');
$result = mysql_query("select date, temperatureEau,temperature, humidity from $table", $conn) or die(mysql_error($conn));

/*
 * send response headers to the browser
 * following headers instruct the browser to treat the data as a csv file called export.csv
 */

header('Content-Type: text/csv');
header('Content-Disposition: attachment;filename=export.csv');

/*
 * output header row (if atleast one row exists)
 */

$row = mysql_fetch_assoc($result);
if ($row) {
    echocsv(array_keys($row));
}

/*
 * output data rows (if atleast one row exists)
 */

while ($row) {
    echocsv($row);
    $row = mysql_fetch_assoc($result);
}

/*
 * echo the input array as csv data maintaining consistency with most CSV implementations
 * - uses double-quotes as enclosure when necessary
 * - uses double double-quotes to escape double-quotes 
 * - uses CRLF as a line separator
 */

function echocsv($fields)
{
    $separator = '';
    foreach ($fields as $field) {
        if (preg_match('/\\r|\\n|,|"/', $field)) {
            $field = '"' . str_replace('"', '""', $field) . '"';
        }
        echo $separator . $field;
        $separator = ',';
    }
    echo "\r\n";
}
?>