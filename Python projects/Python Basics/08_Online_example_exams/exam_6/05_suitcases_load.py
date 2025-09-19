max_capacity = float(input())
command = str(input())
weight_suitcases = 0.0
counter = 0
overload = False
while command != 'End':
    suitcase = float(command)
    counter += 1
    if counter % 3 == 0:
        suitcase *= 1.1
    weight_suitcases += suitcase
    if max_capacity < weight_suitcases:
        overload = True
        counter -= 1
        break
    command = str(input())
if overload:
    print(f"No more space!")
else:
    print(f"Congratulations! All suitcases are loaded!")
print(f"Statistic: {counter} suitcases loaded.")
