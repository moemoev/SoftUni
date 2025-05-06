tournament_name = str(input())
matches_won = 0
matches_lost = 0
total_number_games = 0

while tournament_name != 'End of tournaments':
    number_games = int(input())
    total_number_games += number_games
    for game in range(1, number_games + 1):
        score_deci_team = int(input())
        score_enemy_team = int(input())
        if score_deci_team > score_enemy_team:
            points = score_deci_team - score_enemy_team
            print(f"Game {game} of tournament {tournament_name}: win with {points} points.")
            matches_won += 1
        else:
            points = score_enemy_team - score_deci_team
            print(f"Game {game} of tournament {tournament_name}: lost with {points} points.")
            matches_lost += 1
    tournament_name = str(input())

print(f"{matches_won / total_number_games * 100 :.2f}% matches win")
print(f"{matches_lost / total_number_games * 100 :.2f}% matches lost")
