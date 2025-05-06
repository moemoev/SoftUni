number = int(input())

for left_half in range(11, 100):
    for right_half in range(11, 100):
        first_digit = left_half // 10
        second_digit = left_half % 10
        third_digit = right_half // 10
        fourth_digit = right_half % 10
        if second_digit == 0 or fourth_digit == 0:
            continue
        if first_digit + second_digit == third_digit + fourth_digit:
            if number % (first_digit + second_digit) == 0:
                print(f"{first_digit}{second_digit}{third_digit}{fourth_digit}", end=" ")
