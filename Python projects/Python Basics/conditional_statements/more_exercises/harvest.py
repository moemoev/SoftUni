from math import ceil
from math import floor

area_lose = int(input())
kg_grapes_per_square_meter = float(input())
goal_wine_quantity = int(input())
quantity_workers = int(input())

harvest_grapes = area_lose * 0.4
harvest_wine_quantity = harvest_grapes * kg_grapes_per_square_meter / 2.5

if goal_wine_quantity <= harvest_wine_quantity:
    wine_left = harvest_wine_quantity - goal_wine_quantity
    print(f"Good harvest this year! Total wine: {floor(harvest_wine_quantity)} liters.")
    print(f"{ceil(wine_left)} liters left -> {ceil(wine_left / quantity_workers)} liters per person.")
else:
    wine_deficit = goal_wine_quantity - harvest_wine_quantity
    print(f"It will be a tough winter! More {floor(wine_deficit)} liters wine needed.")
