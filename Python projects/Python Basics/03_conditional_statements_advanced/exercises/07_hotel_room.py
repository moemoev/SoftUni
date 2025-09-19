month = str(input())
nights = int(input())
price_studio = 0.0
price_apartment = 0.0

if month == 'May' or month == 'October':
    price_studio = 50
    price_apartment = 65
    if 7 < nights <= 14:
        price_studio *= 0.95
    elif 14 < nights:
        price_studio *= 0.7
        price_apartment *= 0.9
elif month == 'June' or month == 'September':
    price_studio = 75.20
    price_apartment = 68.70
    if 14 < nights:
        price_studio *= 0.8
        price_apartment *= 0.9
else:
    price_studio = 76
    price_apartment = 77
    if 14 < nights:
        price_apartment *= 0.9

print(f"Apartment: {nights * price_apartment:.2f} lv.")
print(f"Studio: {nights * price_studio:.2f} lv.")