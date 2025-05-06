import sys
from sys import maxsize

numbers = int(input())
odd_sum = 0
odd_min = sys.maxsize
odd_max = -sys.maxsize
even_sum = 0
even_min = maxsize
even_max = -maxsize

for index in range(1, numbers + 1):
    number = float(input())
    if index % 2 == 0:
        even_sum += number
        if number < even_min:
            even_min = number
        if even_max < number:
            even_max = number
    else:
        odd_sum += number
        if number < odd_min:
            odd_min = number
        if odd_max < number:
            odd_max = number

print(f"OddSum={odd_sum:.2f},")
if odd_sum != 0:
    print(f"OddMin={odd_min:.2f},")
    print(f"OddMax={odd_max:.2f},")
else:
    print(f"OddMin=No,")
    print(f"OddMax=No,")
print(f"EvenSum={even_sum:.2f},")
if even_sum != 0:
    print(f"EvenMin={even_min:.2f},")
    print(f"EvenMax={even_max:.2f}")
else:
    print(f"EvenMin=No,")
    print(f"EvenMax=No")
