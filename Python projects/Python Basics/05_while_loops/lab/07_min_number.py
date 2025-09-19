import sys

number = input()
min_number = sys.maxsize  # alternate to using sys.maxsize -> float('inf')

while number != 'Stop':
    if int(number) < min_number:
        min_number = int(number)
    number = input()
print(min_number)
