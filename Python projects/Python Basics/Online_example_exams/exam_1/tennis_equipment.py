import math
price_tennis_racket = float(input())
number_rackets = int(input())
number_shoes = int(input())

total_price_rackets = number_rackets * price_tennis_racket
total_price_shoes = number_shoes * (price_tennis_racket / 6)

total_price = (total_price_shoes + total_price_rackets) * 1.2

print(f"Price to be paid by Djokovic {math.floor(total_price / 8)}")
print(f"Price to be paid by sponsors {math.ceil(total_price * (7/8))}")
