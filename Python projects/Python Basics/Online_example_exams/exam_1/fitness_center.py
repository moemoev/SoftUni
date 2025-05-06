number_clients = int(input())
count_workout = 0
count_buyer = 0
back_workout = 0
chest_workout = 0
leg_workout = 0
abs_workout = 0
sold_protein_shakes = 0
sold_protein_bars = 0

for client in range(number_clients):
    activity = str(input())
    if activity == 'Back':
        back_workout += 1
        count_workout += 1
    elif activity == 'Chest':
        chest_workout += 1
        count_workout += 1
    elif activity == 'Legs':
        leg_workout += 1
        count_workout += 1
    elif activity == 'Abs':
        abs_workout += 1
        count_workout += 1
    elif activity == 'Protein shake':
        sold_protein_shakes += 1
        count_buyer += 1
    elif activity == 'Protein bar':
        sold_protein_bars += 1
        count_buyer += 1

print(f"{back_workout} - back")
print(f"{chest_workout} - chest")
print(f"{leg_workout} - legs")
print(f"{abs_workout} - abs")
print(f"{sold_protein_shakes} - protein shake")
print(f"{sold_protein_bars} - protein bar")
print(f"{count_workout / number_clients * 100 :.2f}% - work out")
print(f"{count_buyer / number_clients * 100 :.2f}% - protein")
