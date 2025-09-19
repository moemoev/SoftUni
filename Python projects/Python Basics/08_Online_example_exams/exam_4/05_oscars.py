name_actor = str(input())
points_academy = float(input())
number_judges = int(input())
actor_did_win = False

for judge in range(number_judges):
    name_judge = str(input())
    points_judge = float(input())
    points_academy += len(name_judge) * points_judge / 2
    if 1250.5 < points_academy:
        actor_did_win = True
        break
if actor_did_win:
    print(f"Congratulations, {name_actor} got a nominee for leading role with {points_academy:.1f}!")
else:
    print(f"Sorry, {name_actor} you need {(1250.5-points_academy):.1f} more!")