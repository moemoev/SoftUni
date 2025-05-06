bottles_detergent = int(input())  # 1 bottle -> 750 ml
quantity_detergent = bottles_detergent * 750
counter = 1
dishes = input()
detergent_is_empty = False
plates = 0
pots = 0

while dishes != 'End':
    if counter % 3 == 0:
        quantity_detergent -= int(dishes) * 15
        pots += int(dishes)
    else:
        quantity_detergent -= int(dishes) * 5
        plates += int(dishes)
    if quantity_detergent < 0:
        detergent_is_empty = True
        break
    dishes = input()
    counter += 1

if detergent_is_empty:
    print(f"Not enough detergent, {abs(quantity_detergent)} ml. more necessary!")
else:
    print(f"Detergent was enough!")
    print(f"{plates} dishes and {pots} pots were washed.")
    print(f"Leftover detergent {quantity_detergent} ml.")
