budget = float(input())
category = str(input())
group_size = int(input())
total_price = 0.0

if group_size <= 4:
    budget *= 0.25
elif group_size <= 9:
    budget *= 0.4
elif group_size <= 24:
    budget *= 0.5
elif group_size <= 49:
    budget *= 0.6
else:
    budget *= 0.75

if category == 'VIP':
    total_price = group_size * 499.99
else:
    total_price = group_size * 249.99

if total_price <= budget:
    excess = budget - total_price
    print(f"Yes! You have {excess:.2f} leva left.")
else:
    deficit = total_price - budget
    print(f"Not enough money! You need {deficit:.2f} leva.")