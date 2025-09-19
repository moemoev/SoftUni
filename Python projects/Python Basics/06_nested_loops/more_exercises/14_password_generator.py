number = int(input())
letter = int(input())

for first_symbol in range(1, number + 1):
    for second_symbol in range(1, number + 1):
        for third_symbol in range(97, 97 + letter):
            for fourth_symbol in range(97, 97 + letter):
                for fifth_symbol in range(1, number + 1):
                    if first_symbol < fifth_symbol and second_symbol < fifth_symbol:
                        print(f"{first_symbol}{second_symbol}{chr(third_symbol)}{chr(fourth_symbol)}{fifth_symbol}",
                              end=" ")
