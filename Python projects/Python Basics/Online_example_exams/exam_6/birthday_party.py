price_room = float(input())

price_cake = price_room * 0.2
price_beverages = price_cake * 0.55
price_animator = price_room / 3

total_cost = price_animator + price_beverages + price_room + price_cake
print(f"{total_cost}")
