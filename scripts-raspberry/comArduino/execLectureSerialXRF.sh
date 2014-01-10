#! /bin/sh
#Entree dans le script
laDate=$(date +"%Y-%b-%-e, %T %Z")
echo "execution du script lectureSerialXRF.py: $laDate"

#Execute la sonde pour capter les ondes RF
python /home/pi/comArduino/lectureSerialXRF.py
