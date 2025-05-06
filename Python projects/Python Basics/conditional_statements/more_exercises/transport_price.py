import sys

distance = int(input())
daytime = str(input())
price_taxi = float(sys.maxsize)
price_bus = float(sys.maxsize)
price_train = float(sys.maxsize)
final_price_trip = 0.0

if daytime == 'day':
    price_taxi = 0.7 + distance * 0.79
else:
    price_taxi = 0.7 + distance * 0.9

if 20 <= distance:
    price_bus = distance * 0.09

if 100 <= distance:
    price_train = distance * 0.06

if price_taxi < price_bus and price_taxi < price_train:
    final_price_trip = price_taxi
elif price_bus < price_taxi and price_bus < price_train:
    final_price_trip = price_bus
else:
    final_price_trip = price_train

print(f"{final_price_trip:.2f}")
