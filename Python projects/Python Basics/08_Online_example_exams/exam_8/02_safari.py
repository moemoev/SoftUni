price_fuel_per_liter = 2.1
price_guide = 100

budget = float(input())
needed_fuel = float(input())
day = str(input())

total_price = price_guide + price_fuel_per_liter * needed_fuel
if day == 'Saturday':
    total_price *= 0.9
else:
    total_price *= 0.8

if total_price <= budget:
    print(f"Safari time! Money left: {(budget - total_price):.2f} lv.")
else:
    print(f"Not enough money! Money needed: {(total_price - budget):.2f} lv.")
