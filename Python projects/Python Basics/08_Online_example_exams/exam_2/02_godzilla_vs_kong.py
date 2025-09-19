budget_movie = float(input())
number_actors = int(input())
price_clothes = float(input())

movie_decor = budget_movie * 0.1
if 150 < number_actors:
    total_price_clothes = number_actors * price_clothes * 0.9
else:
    total_price_clothes = number_actors * price_clothes
total_cost_movie = movie_decor + total_price_clothes

if budget_movie < total_cost_movie:
    print(f"Not enough money!")
    print(f"Wingard needs {(total_cost_movie - budget_movie):.2f} leva more.")
else:
    print(f"Action!")
    print(f"Wingard starts filming with {(budget_movie - total_cost_movie):.2f} leva left.")
