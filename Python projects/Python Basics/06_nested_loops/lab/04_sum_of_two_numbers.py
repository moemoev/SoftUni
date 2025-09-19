start_interval = int(input())
end_interval = int(input())
magic_number = int(input())
result = 0
counter_combinations = 0
combination_exists = False

for first_operand in range(start_interval, end_interval + 1):
    for second_operand in range(start_interval, end_interval + 1):
        counter_combinations += 1
        if first_operand + second_operand == magic_number:
            combination_exists = True
            break
    if combination_exists:
        break

if combination_exists:
    print(f"Combination N:{counter_combinations} ({first_operand} + {second_operand} = {magic_number})")
else:
    print(f"{counter_combinations} combinations - neither equals {magic_number}")
