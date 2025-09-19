width_hall = float(input())
height_hall = float(input()) - 1
height_workplace = 0.7
width_workplace = 1.2
number_rows = width_hall // width_workplace
number_columns = height_hall // height_workplace
number_workplaces = number_rows * number_columns - 3
print(f"{number_workplaces:.2f}")
