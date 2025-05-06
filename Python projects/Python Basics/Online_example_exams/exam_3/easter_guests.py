from math import ceil

number_guests = int(input())
budget_ljubo = int(input())

price_kosunak = 4
price_egg = 0.45

needed_kosunak = ceil(number_guests / 3)
needed_eggs = number_guests * 2

total_cost = needed_kosunak * price_kosunak + needed_eggs * price_egg

if total_cost <= budget_ljubo:
    print(f"Lyubo bought {needed_kosunak} Easter bread and {needed_eggs} eggs.")
    print(f"He has {(budget_ljubo - total_cost):.2f} lv. left.")
else:
    print(f"Lyubo doesn't have enough money.")
    print(f"He needs {(total_cost - budget_ljubo):.2f} lv. more.")
