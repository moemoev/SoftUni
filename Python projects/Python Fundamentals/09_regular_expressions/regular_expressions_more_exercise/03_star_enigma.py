'''
TASK:
The war is in its peak, but you, young Padawan, can turn the tides with your programming skills. You are tasked to
create a program to decrypt the messages of The Order and prevent the death of hundreds of lives.
You will receive several messages, which are encrypted using the legendary star enigma. You should decrypt the messages,
following these rules:
To properly decrypt a message, you should count all the letters [s, t, a, r] – case insensitive and remove the count
from the current ASCII value of each symbol of the encrypted message.
After decryption:
Each message should have a planet name, population, attack type ('A', as attack or 'D', as destruction) and soldier
count.
The planet name starts after '@' and contains only letters from the Latin alphabet.
The planet population starts after ':' and is an Integer;
The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
The soldier count starts after "->" and should be an Integer.
The order in the message should be: planet name -> planet population -> attack type -> soldier count. Each part can be
separated from the others by any character except: '@', '-', '!', ':' and '>'.
'''