from math import floor

played_tournaments = int(input())
starting_points = int(input())
final_points = starting_points
won_tournaments = 0.0

for tournament in range(played_tournaments):
    ranking_tournament = str(input())
    if ranking_tournament == 'W':
        final_points += 2000
        won_tournaments += 1
    elif ranking_tournament == 'F':
        final_points += 1200
    else:
        final_points += 720

print(f"Final points: {final_points}\nAverage points: {floor((final_points - starting_points )/ played_tournaments)}\
\n{(won_tournaments / played_tournaments * 100):.2f}%")
