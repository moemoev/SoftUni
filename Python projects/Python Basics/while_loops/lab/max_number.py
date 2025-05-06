from sys import maxsize
number = input()
max_number = - maxsize  # float('inf'), try it, works like a charm, judge likes it too

while number != 'Stop':
    if int(number) > max_number:
        max_number = int(number)
    number = input()

print(max_number)
