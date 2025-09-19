number_windows = int(input())
size = str(input())
delivery = str(input())
price_per_window = 0

if size == '90X130':
    price_per_window = 110
    if 30 < number_windows <= 60:
        price_per_window *= 0.95
    elif 60 < number_windows:
        price_per_window *= 0.92
elif size == '100X150':
    price_per_window = 140
    if 40 < number_windows <= 80:
        price_per_window *= 0.94
    elif 80 < number_windows:
        price_per_window *= 0.9
elif size == '130X180':
    price_per_window = 190
    if 20 < number_windows <= 50:
        price_per_window *= 0.93
    elif 50 < number_windows:
        price_per_window *= 0.88
elif size == '200X300':
    price_per_window = 250
    if 25 < number_windows <= 50:
        price_per_window *= 0.91
    elif 50 < number_windows:
        price_per_window *= 0.86

total_price = number_windows * price_per_window
if delivery == 'With delivery':
    total_price += 60
if 99 < number_windows:
    total_price *= 0.96
if number_windows < 10:
    print(f"Invalid order")
else:
    print(f"{total_price:.2f} BGN")
