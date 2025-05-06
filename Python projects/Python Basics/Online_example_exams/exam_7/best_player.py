name_player = str(input())
max_goals = 0
top_scorer_name = ''
scored_hat_trick = False

while name_player != 'END':
    goals = int(input())
    if max_goals < goals:
        max_goals = goals
        top_scorer_name = name_player
    if 3 <= max_goals:
        scored_hat_trick = True
    if 10 <= max_goals:
        break
    name_player = str(input())

print(f"{top_scorer_name} is the best player!")
if scored_hat_trick:
    print(f"He has scored {max_goals} goals and made a hat-trick !!!")
else:
    print(f"He has scored {max_goals} goals.")
