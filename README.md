Raspberry
=========
code utile au raspberryPI (www, script python, etc)

www
=========
Service REST disponibles:
- http://localhost/data-monitoring2.php?limit=50
	Retourne les 50 derniers enregistrements
- http://localhost/data-monitoring2.php?limit=10&offset=5 
	Retourne les enregistrements 6 à 15
- http://localhost/data-monitoring2.php?limit=10&champ=temperature
	Retourne les 10 derniers enregistrements de température
- http://localhost/data-monitoring2.php?limit=10&champs=temperature,date
	Retourne les 10 derniers tuples température, date
Pages utiles sont dans web/index3.html (la page index.html a la racine redirige vers cette page)

les graphiques:
- Les différents tests de graph de restitution
- Note sur HighCharts: Consulter http://shop.highsoft.com/highcharts.html
"Do you want to use Highcharts for a personal or non-profit project? Then you can use Highchcarts for free under the  Licence Creative Commons Attribution-NonCommercial 3.0 License. 
Find out more about Non-commercial - Free licenses FAQ"

DataBase
=========
- Fichier SQL utile pour la creation de la base de données.
- Fichier CSV utile si des données doivent etre ajoutées.

Script-raspberry
=========
- Les différents tests pour faire en sorte de recuperer les infos de l'arduino, les stocker en base et les pousser en websocket.
