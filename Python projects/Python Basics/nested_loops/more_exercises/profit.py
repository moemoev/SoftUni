number_one_leva = int(input())
number_two_leva = int(input())
number_five_leva = int(input())
sum_to_form = int(input())

for ones in range(0, number_one_leva + 1):
    for twos in range(0, number_two_leva + 1):
        for fives in range(0, number_five_leva + 1):
            sum_combination = fives * 5 + twos * 2 + ones * 1
            if sum_combination == sum_to_form:
                print(f"{ones} * 1 lv. + {twos} * 2 lv. + {fives} * 5 lv. = {sum_combination} lv.")
