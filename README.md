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

Graph:
- Les différents tests de graph de restitution

DataBase
=========
- Fichier SQL utile pour la creation de la base de données.
- Fichier CSV utile si des données doivent etre ajoutées.
