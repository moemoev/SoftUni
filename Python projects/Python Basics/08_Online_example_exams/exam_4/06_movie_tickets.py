left_limit_symbol = int(input())
right_limit_symbol = int(input())
limit_number_symbol = int(input())

for chr_symbol_in_limit_range in range(left_limit_symbol, right_limit_symbol):
    if chr_symbol_in_limit_range % 2 == 0:
        continue
    for first_digit_symbol in range(1, limit_number_symbol):
        for second_digit_symbol in range(1, limit_number_symbol // 2):  # limits in range cant be gloats->//
            if (first_digit_symbol + second_digit_symbol + chr_symbol_in_limit_range) % 2 == 0:
                continue
            print(f"{chr(chr_symbol_in_limit_range)}-{first_digit_symbol}{second_digit_symbol}{chr_symbol_in_limit_range}")
