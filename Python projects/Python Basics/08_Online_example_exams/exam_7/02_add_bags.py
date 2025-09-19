price_per_twenty_kg = float(input())
weight_luggage = float(input())
days_left = int(input())
number_luggage = int(input())
price_per_luggage = 0.0

if weight_luggage < 10:
    price = price_per_twenty_kg * 0.2
elif 10 <= weight_luggage <= 20:
    price = price_per_twenty_kg * 0.5
else:
    price = price_per_twenty_kg

if 30 < days_left:
    price *= 1.1
elif 7 <= days_left <= 30:
    price *= 1.15
else:
    price *= 1.4

total_price = number_luggage * price
print(f"The total price of bags is: {total_price:.2f} lv.")
