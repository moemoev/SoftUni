quantity_numbers = int(input())
max_number = 0
min_number = 0


for iteration in range(quantity_numbers):
    number_input = int(input())
    if iteration == 0:
        max_number = number_input
        min_number = number_input
    elif max_number < number_input:
        max_number = number_input
    elif min_number > number_input:
        min_number = number_input

print(f"Max number: {max_number}\nMin number: {min_number}")
