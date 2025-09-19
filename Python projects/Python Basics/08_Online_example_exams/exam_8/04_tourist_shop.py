budget = float(input())
product = str(input())
total_price = 0.0
not_enough_money = False
counter_products = 0
deficit = 0

while product != 'Stop':
    price = float(input())
    counter_products += 1
    if counter_products % 3 == 0:
        price *= 0.5
    if budget < total_price + price:
        not_enough_money = True
        deficit = total_price + price - budget
        break
    total_price += price
    product = str(input())

if not_enough_money:
    print(f"You don't have enough money!")
    print(f"You need {deficit:.2f} leva!")
else:
    print(f"You bought {counter_products} products for {total_price:.2f} leva.")
