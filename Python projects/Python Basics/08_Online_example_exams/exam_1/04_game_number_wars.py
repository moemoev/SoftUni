name_first_player = str(input())
name_second_player = str(input())
points_first_player = 0
points_second_player = 0
first_number = str(input())
number_wars = False
winner = ''

while first_number != 'End of game':
    second_number = int(input())
    if int(first_number) > second_number:
        points_first_player += int(first_number) - second_number
    elif int(first_number) < second_number:
        points_second_player += second_number - int(first_number)
    else:
        print("Number wars!")
        number_wars = True
        first = int(input())
        second = int(input())
        if first > second:
            points_winner = points_first_player
            winner = name_first_player
        elif first < second:
            points_winner = points_second_player
            winner = name_second_player
        break
    first_number = str(input())
if number_wars:
    print(f"{winner} is winner with {points_winner} points")
else:
    print(f"{name_first_player} has {points_first_player} points")
    print(f"{name_second_player} has {points_second_player} points")
