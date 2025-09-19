name_soccerclub = str(input())
number_games = int(input())
wins = 0
draws = 0
losses = 0

for games in range(number_games):
    result = str(input())
    if result == 'W':
        wins += 1
    elif result == 'D':
        draws += 1
    elif result == 'L':
        losses += 1
if number_games == 0:
    print(f"{name_soccerclub} hasn't played any games during this season.")
else:
    print(f"{name_soccerclub} has won {wins * 3 + draws} points during this season.")
    print(f"Total stats:")
    print(f"## W: {wins}")
    print(f"## D: {draws}")
    print(f"## L: {losses}")
    print(f"Win rate: {wins / number_games * 100:.2f}%")
