#echo $1 >> /var/log/xav.log 2>&1 
sudo python /home/pi/comArduino/ecritureSerial.py $1 >> /var/log/xav.log 2>&1
