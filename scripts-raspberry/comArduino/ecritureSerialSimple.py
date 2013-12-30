import serial
import time 
ser = serial.Serial('/dev/ttyACM0', 9600)
time.sleep(4)
ser.write("8")
