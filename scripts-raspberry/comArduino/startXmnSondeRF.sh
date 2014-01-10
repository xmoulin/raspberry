#! /bin/sh
#Entree dans le script
laDate=$(date +"%Y-%b-%-e, %T %Z")
echo "demarrage du PI: $laDate"

#Envoi son ip par mail. Si ecran Nokia pas disponible
ifconfig | mail -s "monIP a $laDate" innovation.sopra@gmail.com
echo "sendMail OK"
 
#Execute la sonde pour capter les ondes RF
#sh /home/pi/comArduino/execLectureSerialXRF.sh   > /var/log/comArduino.log
sh /home/pi/comArduino/execLectureSerialXRF.sh 1>>/var/log/comArduino.log 2>>/var/log/comArduino-err.log  &
#python /home/pi/comArduino/lectureSerialXRF.py > /var/log/comArduino.log
#python /home/pi/comArduino/lectureSerialXRF.py 1>>/var/log/comArduino.log 2>>/var/log/comArduino-err.log
