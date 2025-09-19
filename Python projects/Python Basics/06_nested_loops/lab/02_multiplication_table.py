first_multiplier_max = 10
second_multiplier_max = 10

# for first_multiplier in range(1, first_multiplier_max + 1):
#     for second_multiplier in range(1, second_multiplier_max + 1):
#         result = first_multiplier * second_multiplier
#         print(f"{first_multiplier} * {second_multiplier} = {result}")

first_mult = 1
second_mult = 1
result = 0

while first_mult < 10:
    if second_mult == 11:
        second_mult = 1
        first_mult += 1
    while second_mult <= 10:
        result = first_mult * second_mult
        print(f"{first_mult} * {second_mult} = {result}")
        second_mult += 1
