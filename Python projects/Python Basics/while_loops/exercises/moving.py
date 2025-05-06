apartment_width = int(input())
apartment_length = int(input())
apartment_height = int(input())
total_room = apartment_height * apartment_length * apartment_width
packets = input()

while 0 < total_room and packets != 'Done':
    total_room -= int(packets)
    if total_room < 0:
        continue
    packets = input()

if packets == 'Done':
    print(f"{total_room} Cubic meters left.")
else:
    print(f"No more free space! You need {abs(total_room)} Cubic meters more.")
