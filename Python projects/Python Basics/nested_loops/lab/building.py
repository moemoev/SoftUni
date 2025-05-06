number_floors = int(input())
number_rooms = int(input())

for floor in range(number_floors, 0, -1):
    for room in range(number_rooms):
        if floor == number_floors:
            sort_of_room = 'L'
        elif floor % 2 == 0:
            sort_of_room = 'O'
        else:
            sort_of_room = 'A'
        print(f"{sort_of_room}{floor}{room}", end=" ")
    print()
