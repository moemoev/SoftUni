from math import ceil

height_wall = int(input())
length_wall = int(input())
non_painted_percentage = 1 - int(input())/100
total_area = ceil(height_wall * length_wall * 4 * non_painted_percentage)
paint_is_empty = False
command = str(input())
while command != 'Tired!':
    liters_paint = int(command)
    if liters_paint < total_area:
        total_area -= liters_paint
    elif total_area == liters_paint:
        total_area -= liters_paint
        paint_is_empty = True
        break
    else:
        liters_paint -= total_area
        total_area = 0
        break
    command = str(input())

if command == 'Tired!':
    print(f"{total_area} quadratic m left.")
elif paint_is_empty:
    print(f"All walls are painted! Great job, Pesho!")
elif not paint_is_empty:
    print(f"All walls are painted and you have {liters_paint} l paint left!")
