number = int(input())

for numbers in range(1111, 10000):
    numbers_to_str = str(numbers)
    digit_counter = 0
    for position in range(4):
        if int(numbers_to_str[position]) == 0:
            break
        if number % int(numbers_to_str[position]) == 0:
            digit_counter += 1
    if digit_counter == 4:
        print(f"{numbers}", end=" ")
