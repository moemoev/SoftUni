flower_type = str(input())
quantity_flowers = int(input())
budget = int(input())
flower_cost = 0.0  # the else-conditions regarding the price that will not be affected by discount, could be assigned
total_cost = 0.0   # to total_cost before the if- condition that checks the amount, would save 1 line per each type of
# flower, furthermore prices could be set before the conditions

if flower_type == "Roses":
    flower_cost = 5
    if quantity_flowers > 80:
        total_cost = quantity_flowers * flower_cost * 0.9
    else:
        total_cost = quantity_flowers * flower_cost
elif flower_type == "Dahlias":
    flower_cost = 3.8
    if quantity_flowers > 90:
        total_cost = quantity_flowers * flower_cost * 0.85
    else:
        total_cost = quantity_flowers * flower_cost
elif flower_type == "Tulips":
    flower_cost = 2.8
    if quantity_flowers > 80:
        total_cost = quantity_flowers * flower_cost * 0.85
    else:
        total_cost = quantity_flowers * flower_cost
elif flower_type == "Narcissus":
    flower_cost = 3
    if quantity_flowers < 120:
        total_cost = quantity_flowers * flower_cost * 1.15
    else:
        total_cost = quantity_flowers * flower_cost
else:
    flower_cost = 2.5
    if quantity_flowers < 80:
        total_cost = quantity_flowers * flower_cost * 1.2
    else:
        total_cost = quantity_flowers * flower_cost

if budget >= total_cost:
    print(
        f"Hey, you have a great garden with {quantity_flowers} {flower_type} and {budget - total_cost:.2f} leva left.")
else:
    print(f"Not enough money, you need {total_cost - budget:.2f} leva more.")
