actors_name = str(input())
academy_points = float(input())
number_judges = int(input())
total_points_actor = academy_points

for judges in range(number_judges):
    name_judge = str(input())
    points_judge = float(input())
    if total_points_actor > 1250.5:
        # print(f"Congratulations, {actors_name} got a nominee for leading role with {точки}!")
        break
    total_points_actor += len(name_judge) * points_judge / 2

if total_points_actor > 1250.5:
    print(f"Congratulations, {actors_name} got a nominee for leading role with {total_points_actor:.1f}!")
else:
    print(f"Sorry, {actors_name} you need {1250.5 - total_points_actor:.1f} more!")
