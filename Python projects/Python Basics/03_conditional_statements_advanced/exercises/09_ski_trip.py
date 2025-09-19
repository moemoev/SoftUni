days = int(input())
type_of_room = str(input())
service = str(input())

room_for_one_person_cost = 18
apartment_cost = 25
president_apartment_cost = 35

total_cost = 0.0

if type_of_room == 'room for one person':
    total_cost = room_for_one_person_cost * (days - 1)
elif type_of_room == 'apartment':
    total_cost = apartment_cost * (days - 1)
    if days < 10:
        total_cost -= total_cost * 0.3
    elif 10 <= days <= 15:
        total_cost -= total_cost * 0.35
    else:
        total_cost -= total_cost * 0.5
else:
    total_cost = president_apartment_cost * (days - 1)
    if days < 10:
        total_cost -= total_cost * 0.1
    elif 10 <= days <= 15:
        total_cost -= total_cost * 0.15
    else:
        total_cost -= total_cost * 0.2

if service == 'positive':
    total_cost *= 1.25
else:
    total_cost *= 0.9

print(f"{total_cost:.2f}")
