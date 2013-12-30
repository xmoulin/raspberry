import sys
import serial
import time
 
def check():
    if len(sys.argv) != 2:
        print "pas assez d'arguments"
        sys.exit() 
    
    print sys.argv[1] 

check()
ser = serial.Serial('/dev/ttyACM0', 9600)
time.sleep(4)
ser.write(sys.argv[1])
