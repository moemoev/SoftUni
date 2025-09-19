control_sum = int(input())
counter_valid_paroles = 0
password = 0
password_found = False
for first_digit in range(1, 10):
    for second_digit in range(1, 10):
        if first_digit >= second_digit:
            continue
        for third_digit in range(1, 10):
            for fourth_digit in range(1, 10):
                if third_digit == fourth_digit:
                    break
                magic_number = first_digit * second_digit + third_digit * fourth_digit
                if magic_number == control_sum:
                    counter_valid_paroles += 1
                    print(f"{first_digit}{second_digit}{third_digit}{fourth_digit}", end=" ")
                if counter_valid_paroles == 4 and not password_found:
                    password = first_digit * 1000 + second_digit * 100 + third_digit * 10 + fourth_digit
                    password_found = True
if password_found:
    print(f"\nPassword: {password}")
else:
    print(f"\nNo!")
