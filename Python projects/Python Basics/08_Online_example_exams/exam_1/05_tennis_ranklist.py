from math import floor
from math import ceil

number_cups = int(input())
starting_points = int(input())
points = 0
number_wins = 0

for cups in range(number_cups):
    position = str(input())
    if position == 'W':
        points += 2000
        number_wins += 1
    elif position == 'F':
        points += 1200
    else:
        points += 720

print(f"Final points: {starting_points + points}")
print(f"Average points: {floor(points / number_cups)}")
print(f"{number_wins / number_cups * 100:.2f}%")
