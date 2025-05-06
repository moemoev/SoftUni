number_juniors = int(input())
number_seniors = int(input())
trace = str(input())
total_price = 0.0

price_trail_juniors = 5.5
price_trail_seniors = 7
price_cc_juniors = 8
price_cc_seniors = 9.5
price_downhill_juniors = 12.25
price_downhill_seniors = 13.75
price_road_juniors = 20
price_road_seniors = 21.50

if 50 <= number_seniors + number_juniors:
    price_cc_juniors *= 0.75
    price_cc_seniors *= 0.75

if trace == 'trail':
    total_price = number_juniors * price_trail_juniors + number_seniors * price_trail_seniors
elif trace == 'cross-country':
    total_price = number_juniors * price_cc_juniors + number_seniors * price_cc_seniors
elif trace == 'downhill':
    total_price = number_juniors * price_downhill_juniors + number_seniors * price_downhill_seniors
else:
    total_price = number_juniors * price_road_juniors + number_seniors * price_road_seniors

print(f"{(total_price * 0.95):.2f}")
