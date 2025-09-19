price_basket = 1.5
price_wreath = 3.8
price_chocolate_bunny = 7
number_clients = int(input())

total_bill = 0.0

for client in range(number_clients):
    bill = 0.0
    items = 0
    command = str(input())
    while command != 'Finish':
        items += 1
        if command == 'basket':
            bill += price_basket
        elif command == 'wreath':
            bill += price_wreath
        elif command == 'chocolate bunny':
            bill += price_chocolate_bunny
        command = str(input())
    if items % 2 == 0:
        bill *= 0.8
    total_bill += bill
    print(f"You purchased {items} items for {bill:.2f} leva.")
print(f"Average bill per client is: {total_bill / number_clients :.2f} leva.")
