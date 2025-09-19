number_days = int(input())
number_hours = int(input())
total_price = 0

for day in range(1, number_days + 1):
    price_per_day = 0
    for hour in range(1, number_hours + 1):
        if day % 2 == 0 and hour % 2 != 0:
            price = 2.5
        elif day % 2 != 0 and hour % 2 == 0:
            price = 1.25
        else:
            price = 1
        price_per_day += price
    print(f"Day: {day} - {price_per_day:.2f} leva")
    total_price += price_per_day
print(f"Total: {total_price:.2f} leva")
