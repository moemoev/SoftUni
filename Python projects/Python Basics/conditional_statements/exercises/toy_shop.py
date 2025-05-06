trip_cost = float(input())
puzzle = int(input())
puppet = int(input())
teddy = int(input())
minion = int(input())
truck = int(input())
toys_cnt = puzzle + puppet + teddy + minion + truck
toys_cost = puzzle * 2.6 + puppet * 3.0 + teddy * 4.1 + minion * 8.2 + truck * 2.0

if toys_cnt >= 50:
    toys_cost *= 0.75

total_money = toys_cost * 0.9

if total_money >= trip_cost:
    print(f"Yes! {total_money - trip_cost:.2f} lv left.")
else:
    print(f"Not enough money! {trip_cost - total_money:.2f} lv needed.")
