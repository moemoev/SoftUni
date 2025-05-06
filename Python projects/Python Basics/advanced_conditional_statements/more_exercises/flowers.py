number_chrysanthemums = int(input())
number_roses = int(input())
number_tulips = int(input())
season = str(input())
holiday = str(input())
total_price = 0.0
total_number_flowers = number_tulips + number_roses + number_chrysanthemums

if season == 'Spring' or season == 'Summer':
    total_price = number_chrysanthemums * 2 + number_roses * 4.1 + number_tulips * 2.5
else:
    total_price = number_chrysanthemums * 3.75 + number_roses * 4.5 + number_tulips * 4.15

if holiday == 'Y':
    total_price *= 1.15
if 7 < number_tulips and season == 'Spring':
    total_price *= 0.95
if 10 <= number_roses and season == 'Winter':
    total_price *= 0.9
if 20 < total_number_flowers:
    total_price *= 0.8

print(f"{(total_price + 2):.2f}")
