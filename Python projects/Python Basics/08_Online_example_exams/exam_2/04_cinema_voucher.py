budget = int(input())
bought_item = str(input())
bought_tickets = 0
bought_products = 0

while bought_item != 'End':
    if len(bought_item) <= 8:
        price_item = ord(bought_item[0])
        if budget - ord(bought_item[0]) < 0:
            break
        else:
            bought_products += 1
            budget -= price_item
    else:
        price_movie = ord(bought_item[0]) + ord(bought_item[1])
        if budget - (ord(bought_item[0]) + ord(bought_item[1])) < 0:
            break
        else:
            bought_tickets += 1
            budget -= price_movie
    bought_item = str(input())
print(f"{bought_tickets}")
print(f"{bought_products}")
