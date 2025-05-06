type_of_projection = str(input())
columns = int(input())
rows = int(input())
number_of_seats = columns * rows
profit = 0.0

if type_of_projection == "Premiere":
    profit = number_of_seats * 12
elif type_of_projection == "Normal":
    profit = number_of_seats * 7.5
elif type_of_projection == "Discount":
    profit = number_of_seats * 5

print(f"{profit:.2f} leva")
