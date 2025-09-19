count_numbers = int(input())
n = 1
sum_numbers = 0

while n <= count_numbers:
    number = int(input())
    sum_numbers += number
    n += 1

average_numbers = sum_numbers / count_numbers
print(f"{average_numbers:.2f}")
