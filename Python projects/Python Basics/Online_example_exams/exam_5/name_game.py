name_player = str(input())
winner = ''
max_points = 0
while name_player != 'Stop':
    points = 0
    for letters in name_player:
        number = int(input())
        if number == ord(letters):
            points += 10
        else:
            points += 2
    if max_points <= points:
        max_points = points
        winner = name_player
    name_player = str(input())
print(f"The winner is {winner} with {max_points} points!")
