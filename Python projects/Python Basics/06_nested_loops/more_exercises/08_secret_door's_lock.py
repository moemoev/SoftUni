limit_first_digit = int(input())
limit_second_digit = int(input())
limit_third_digit = int(input())

for first_digit in range(1, limit_first_digit + 1):
    if first_digit % 2 != 0:
        continue
    for second_digit in range(2, limit_second_digit + 1):
        if second_digit > 7:
            continue
        if second_digit == 4 or second_digit == 6:
            continue
        for third_digit in range(1, limit_third_digit + 1):
            if third_digit % 2 != 0:
                continue
            print(f"{first_digit} {second_digit} {third_digit}")
