size_eggs = str(input())
color_eggs = str(input())
number_eggs = int(input())

if size_eggs == 'Large':
    if color_eggs == 'Red':
        cost_per_egg = 16
    elif color_eggs == 'Green':
        cost_per_egg = 12
    else:
        cost_per_egg = 9
elif size_eggs == 'Medium':
    if color_eggs == 'Red':
        cost_per_egg = 13
    elif color_eggs == 'Green':
        cost_per_egg = 9
    else:
        cost_per_egg = 7
else:
    if color_eggs == 'Red':
        cost_per_egg = 9
    elif color_eggs == 'Green':
        cost_per_egg = 8
    else:
        cost_per_egg = 5
total_cost = number_eggs * cost_per_egg * 0.65
print(f"{total_cost:.2f} leva.")
