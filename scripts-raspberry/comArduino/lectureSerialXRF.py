#Lancer le script via /home/pi/comArduino/startXmnSondeRF.sh pour qu il passe en bg tout seul
import serial
import json
import sys
from datetime import datetime
import MySQLdb

db = MySQLdb.connect(host="localhost", # your host, usually localhost
                     user="pi", # your username
                      passwd="raspberry", # your password
                      db="monitoring") # name of the data base

# you must create a Cursor object. It will let
#  you execute all the query you need
cur = db.cursor() 


def xmnData(donnees):
     if 'iteration' in donnees:
	cur.execute('INSERT INTO indicateur (iteration, temperature, humidity, date, sonMin, sonMax, sonMoy, gaz, lumiere) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)', (donnees['iteration'], donnees['temperature'], donnees['humidity'],datetime.now().isoformat(),donnees['sonMin'], donnees['sonMax'], donnees['sonMoy'], donnees['gaz'], donnees['lumiere']))
#	cur.execute('INSERT INTO indicateur (iteration, temperatureEau, temperature, humidity) VALUES (%s,%s,%s,%s)', (donnees['iteration'], donnees['temperatureEau'], donnees['temperature'], donnees['humidity']))
#	cur.execute('INSERT INTO indicateur (iteration, temperatureEau, temperature, humidity) VALUES (%s,%s,%s,%s)', (donnees['iteration'], 19.5523, 21.0, 50.0))
#	cur.execute("INSERT INTO indicateur (iteration, temperatureEau, temperature, humidity) VALUES (1, 19.5523, 21.0, 50.0)")
#	cur.execute('INSERT INTO indicateur (iteration, temperatureEau, temperature, humidity, date ) VALUES (%s,%s,%s,%s,%s)',(donnees['iteration'],donnees['temperatureEau'],donnees['temperature'],donnees['humidity'],1);
	db.commit()
        return donnees['temperature'] 
     elif 'action' in donnees:			#gestion des bouton ou NFC
	if donnees['action'] == 'NFC':
		return donnees['id'].strip()  	#strip permet de faire un trim
	else:
		return donnees['action']
     return donnees

print("debut")
#
# Exemple de flux possible
#
#{"iteration":1,"sonMin":0,"sonMax":0,"sonMoy":0,"gaz":3,"lumiere":77,"temperature":23.10000,"humidity":53.00000}
#{"action":"loadDataBouton"}
#{"iteration":2,"sonMin":0,"sonMax":11,"sonMoy":0,"gaz":3,"lumiere":77,"temperature":23.10000,"humidity":53.00000}
#{"action":"NFC","id":" D5 28 FE B0"}
#{"iteration":3,"sonMin":0,"sonMax":14,"sonMoy":0,"gaz":3,"lumiere":76,"temperature":23.10000,"humidity":53.00000}
#{"action":"toggleBouton"}
#{"action":"adminBouton"}
#{"action":"NFC","id":" 04 C4 5D 82 BA 29 80"}
#{"action":"NFC","id":" 44 94 72 1A"}
ser = serial.Serial('/dev/ttyAMA0',9600)
while 1 :
	try:
		line = ser.readline().rstrip()
		print(line)
		if (line.startswith('{')): 
			print('on a du json sur la ligne ci-dessus')
			print(json.loads(line,object_hook=xmnData))
#			print(xmnData(line))	
	except:
		print "J ai une erreur:", sys.exc_info()[0]
