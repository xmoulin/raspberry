import serial
import json

print("debut")
ser = serial.Serial('/dev/ttyAMA0',9600)

while 1 :
        line = ser.readline().rstrip()
        print(line)
# print(ser.read(4))
#	print(ser.readline().rstrip())
