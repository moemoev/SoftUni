beverage = str(input())
sugar = str(input())
amount = int(input())
price_per_beverage = 0.0

if beverage == 'Espresso':
    if sugar == 'Without':
        price_per_beverage = 0.9 * 0.65
    elif sugar == 'Normal':
        price_per_beverage = 1
    elif sugar == 'Extra':
        price_per_beverage = 1.2
    if 5 <= amount:
        price_per_beverage *= 0.75
elif beverage == 'Cappuccino':
    if sugar == 'Without':
        price_per_beverage = 1 * 0.65
    elif sugar == 'Normal':
        price_per_beverage = 1.2
    elif sugar == 'Extra':
        price_per_beverage = 1.6
elif beverage == 'Tea':
    if sugar == 'Without':
        price_per_beverage = 0.5 * 0.65
    elif sugar == 'Normal':
        price_per_beverage = 0.6
    elif sugar == 'Extra':
        price_per_beverage = 0.7

total_price = amount * price_per_beverage
if 15 < total_price:
    total_price *= 0.8
print(f"You bought {amount} cups of {beverage} for {total_price:.2f} lv.")
