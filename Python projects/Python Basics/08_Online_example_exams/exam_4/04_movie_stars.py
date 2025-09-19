budget_movie = float(input())
name_actor = str(input())
not_enough_money = False

while name_actor != 'ACTION':
    if 15 < len(name_actor):
        actors_pay = budget_movie * 0.2
    else:
        actors_pay = float(input())
    if actors_pay <= budget_movie:
        budget_movie -= actors_pay
    else:
        not_enough_money = True
        break
    name_actor = str(input())
if not_enough_money:
    print(f"We need {(actors_pay - budget_movie):.2f} leva for our actors.")
else:
    print(f"We are left with {budget_movie:.2f} leva.")
