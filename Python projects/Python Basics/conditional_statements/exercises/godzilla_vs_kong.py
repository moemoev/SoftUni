budget = float(input())
actors = int(input())
price_clothes = float(input())
decor = budget * 0.1
if actors > 150:
    cost_cloths = price_clothes * actors * 0.9
else:
    cost_cloths = price_clothes * actors
movie_cost = decor + cost_cloths
if movie_cost > budget:
    print(f"Not enough money!\nWingard needs {movie_cost - budget:.2f} leva more.")
else:
    print(f"Action!\nWingard starts filming with {budget - movie_cost:.2f} leva left.")
