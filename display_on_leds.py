# This program is hereby placed into the public domain by its author.

import gpiozero
import time

led4s = gpiozero.LED(17)
led2s = gpiozero.LED(27)
led1s = gpiozero.LED(22)

for led in [led4s,led2s,led1s]:
   led.off()

while True:
    got_n = False
    while not got_n:
        try:
            with open("n-new-emails.txt", "r") as infile:
                n = int(infile.read())
                got_n = True
        except:
            time.sleep(2)

    if n > 7:
        for led in [led4s,led2s,led1s]:
            led.on()
        time.sleep(0.5)
        for led in [led4s,led2s,led1s]:
            led.off()
        time.sleep(0.5)


    if n < 8:
        if n > 3:
            led4s.on()
            n -= 4
        else:
            led4s.off()

        if n > 1:
            led2s.on()
            n -= 2
        else:
            led2s.off()

        if n > 0:
            led1s.on()
        else:
            led1s.off()

        time.sleep(1)
