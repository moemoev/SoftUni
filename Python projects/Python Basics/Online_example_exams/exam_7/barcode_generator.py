lower_limit = str(input())
upper_limit = str(input())

for first_digit in range(int(lower_limit[0]), int(upper_limit[0]) + 1):
    for second_digit in range(int(lower_limit[1]), int(upper_limit[1]) + 1):
        for third_digit in range(int(lower_limit[2]), int(upper_limit[2]) + 1):
            for fourth_digit in range(int(lower_limit[3]), int(upper_limit[3]) + 1):
                if first_digit % 2 != 0 and second_digit % 2 != 0 and third_digit % 2 != 0 and fourth_digit % 2 != 0:
                    print(f"{first_digit}{second_digit}{third_digit}{fourth_digit}", end = ' ')
