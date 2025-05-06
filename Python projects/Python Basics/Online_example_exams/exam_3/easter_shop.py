number_eggs = int(input())
total_eggs_sold = 0
shop_is_closed = False

while 0 < number_eggs:
    command = str(input())
    if command == 'Close':
        shop_is_closed = True
        break
    amount_eggs = int(input())
    if command == 'Buy':
        if number_eggs < amount_eggs:
            break
        number_eggs -= amount_eggs
        total_eggs_sold += amount_eggs
    else:
        number_eggs += amount_eggs
if shop_is_closed:
    print(f"Store is closed!")
    print(f"{total_eggs_sold} eggs sold.")
else:
    print(f"Not enough eggs in store!")
    print(f"You can buy only {number_eggs}.")
