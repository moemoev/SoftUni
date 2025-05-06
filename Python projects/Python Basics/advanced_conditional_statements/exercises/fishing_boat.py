budget = int(input())
season = str(input())
group_size = int(input())
total_cost = 0.0
boat_cost = 0.0
group_size_discount = 0.0

if season == "Spring":
    boat_cost = 3000
    if group_size <= 6:
        group_size_discount = 0.1
    elif 6 < group_size <= 11:
        group_size_discount = 0.15
    else:
        group_size_discount = 0.25
elif season == "Summer" or season == "Autumn":
    boat_cost = 4200
    if group_size <= 6:
        group_size_discount = 0.1
    elif 6 < group_size <= 11:
        group_size_discount = 0.15
    else:
        group_size_discount = 0.25
else:
    boat_cost = 2600
    if group_size <= 6:
        group_size_discount = 0.1
    elif 6 < group_size <= 11:
        group_size_discount = 0.15
    else:
        group_size_discount = 0.25

boat_cost -= boat_cost * group_size_discount

if group_size % 2 == 0 and season != "Autumn":
    total_cost = boat_cost * 0.95
else:
    total_cost = boat_cost

if budget >= total_cost:
    print(f"Yes! You have {budget - total_cost:.2f} leva left.")
else:
    print(f"Not enough money! You need {total_cost - budget:.2f} leva.")
