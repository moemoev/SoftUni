number_pairs = int(input())
value = 0
previous_value = 0
max_diff = 0

for pair in range(number_pairs):
    first_number = int(input())
    second_number = int(input())
    value = first_number + second_number
    if number_pairs == 1:
        continue
    if previous_value != value and pair != 0:
        max_diff = abs(value - previous_value)

    previous_value = value
if max_diff == 0:
    print(f"Yes, value={value}")
else:
    print(f"No, maxdiff={max_diff}")
