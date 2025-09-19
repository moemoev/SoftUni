import sys

numbers = int(input())
max_number = -sys.maxsize
sum_numbers = 0

for iteration in range(numbers):
    numbers_read = int(input())
    sum_numbers += numbers_read
    if max_number < numbers_read:
        max_number = numbers_read

sum_numbers -= max_number

if max_number == sum_numbers:
    print(f"Yes\nSum = {sum_numbers}")
else:
    print(f"No\nDiff = {abs(sum_numbers - max_number)}")
