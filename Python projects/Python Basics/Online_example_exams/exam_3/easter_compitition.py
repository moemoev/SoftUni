number_kosunaci = int(input())
top_chef = ''
max_points = 0


for kosunak in range(number_kosunaci):
    name_chef = str(input())
    points = str(input())
    sum_points = 0
    while points != 'Stop':
        sum_points += int(points)
        points = str(input())
    print(f"{name_chef} has {sum_points} points.")
    if max_points < sum_points:
        max_points = sum_points
        top_chef = name_chef
        print(f"{name_chef} is the new number 1!")
print(f"{top_chef} won competition with {max_points} points!")
