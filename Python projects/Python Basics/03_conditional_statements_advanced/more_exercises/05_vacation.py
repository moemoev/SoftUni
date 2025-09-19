budget = float(input())
season = str(input())

location = ''
overnight_type = ''
price = 0.0

if budget <= 1000:
    overnight_type = 'Camp'
    if season == 'Summer':
        location = 'Alaska'
        price = budget * 0.65
    else:
        location = 'Morocco'
        price = budget * 0.45
elif budget <= 3000:
    overnight_type = 'Hut'
    if season == 'Summer':
        location = 'Alaska'
        price = budget * 0.8
    else:
        location = 'Morocco'
        price = budget * 0.6
else:
    overnight_type = 'Hotel'
    price = budget * 0.9
    if season == 'Summer':
        location = 'Alaska'
    else:
        location = 'Morocco'

print(f"{location} - {overnight_type} - {price:.2f}")
