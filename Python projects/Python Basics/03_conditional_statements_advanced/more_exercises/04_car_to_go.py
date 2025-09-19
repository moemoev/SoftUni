budget = float(input())  # Summer,Winter
season = str(input())  # Cabiro,Jeep
car_class = ''
car_type = ''
price = 0.0

if budget <= 100:
    car_class = 'Economy class'
    if season == 'Summer':
        car_type = 'Cabrio'
        price = budget * 0.35
    else:
        car_type = 'Jeep'
        price = budget * 0.65
elif budget <= 500:
    car_class = 'Compact class'
    if season == 'Summer':
        car_type = 'Cabrio'
        price = budget * 0.45
    else:
        car_type = 'Jeep'
        price = budget * 0.8
else:
    car_class = 'Luxury class'
    car_type = 'Jeep'
    price = budget * 0.9

print(f"{car_class}\n{car_type} - {price:.2f}")
