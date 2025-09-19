name_player = str(input())
field = str(input())
points_to_achieve = 301
count_unsuccessful_shots = 0
count_shots = 0
while 0 < points_to_achieve and field != 'Retire':
    points_per_shot = int(input())
    if field == 'Single':
        points_per_shot *= 1
    elif field == 'Double':
        points_per_shot *= 2
    else:
        points_per_shot *= 3
    if points_to_achieve - points_per_shot < 0:
        count_unsuccessful_shots += 1
        field = str(input())
        continue
    else:
        points_to_achieve -= points_per_shot
        count_shots += 1
    if points_to_achieve != 0:
        field = str(input())

if points_to_achieve == 0:
    print(f"{name_player} won the leg with {count_shots} shots.")
else:
    print(f"{name_player} retired after {count_unsuccessful_shots} unsuccessful shots.")
