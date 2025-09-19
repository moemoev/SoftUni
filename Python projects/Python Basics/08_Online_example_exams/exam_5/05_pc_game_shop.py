counter_hearthstone = 0
counter_fornite = 0
counter_overwatch = 0
counter_others = 0
number_games = int(input())

for game in range(number_games):
    game_name = str(input())
    if game_name == 'Hearthstone':
        counter_hearthstone += 1
    elif game_name == 'Fornite':
        counter_fornite += 1
    elif game_name == 'Overwatch':
        counter_overwatch += 1
    else:
        counter_others += 1
print(f"Hearthstone - {counter_hearthstone / number_games * 100:.2f}%")
print(f"Fornite - {counter_fornite / number_games * 100:.2f}%")
print(f"Overwatch - {counter_overwatch / number_games * 100:.2f}%")
print(f"Others - {counter_others / number_games * 100:.2f}%")
