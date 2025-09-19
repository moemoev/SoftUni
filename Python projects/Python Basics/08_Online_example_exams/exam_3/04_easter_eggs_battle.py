number_eggs_player_one = int(input())
number_eggs_player_two = int(input())

while number_eggs_player_one != 0 and number_eggs_player_two != 0:
    winner = str(input())
    if winner == 'one':
        number_eggs_player_two -= 1
    elif winner == 'two':
        number_eggs_player_one -= 1
    else:
        print(f"Player one has {number_eggs_player_one} eggs left.")
        print(f"Player two has {number_eggs_player_two} eggs left.")
        break

if number_eggs_player_one == 0:
    print(f"Player one is out of eggs. Player two has {number_eggs_player_two} eggs left.")
elif number_eggs_player_two == 0:
    print(f"Player two is out of eggs. Player one has {number_eggs_player_one} eggs left.")
