first_upper_limit = int(input())
second_upper_limit = int(input())
third_upper_limit = int(input())

for first_digit in range(1, first_upper_limit + 1):
    if first_digit % 2 != 0:
        continue
    for second_digit in range(2, second_upper_limit + 1):
        if second_digit == 4 or second_digit == 6 or second_digit > 7:
            continue
        for third_digit in range(1, third_upper_limit + 1):
            if third_digit % 2 != 0:
                continue
            print(f"{first_digit} {second_digit} {third_digit}")
