raspberry
=========

code utile au raspberryPI (www, script python, etc)

Service
=========
Service REST disponibles
- http://localhost/data-monitoring2.php?limit=50
	Retourne les 50 derniers enregistrements
- http://localhost/data-monitoring2.php?limit=10&offset=5 
	Retourne les enregistrements 6 à 15
- http://localhost/data-monitoring2.php?limit=10&champ=temperature
	Retourne les 10 derniers enregistrements de température
- http://localhost/data-monitoring2.php?limit=10&champs=temperature,date
	Retourne les 10 derniers tuples température, date
