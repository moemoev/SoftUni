price_strawberries = float(input())
quantity_bananas = float(input())
quantity_oranges = float(input())
quantity_wildberries = float(input())
quantity_strawberries = float(input())

price_wildberries = price_strawberries / 2
price_oranges = price_wildberries * 0.6
price_bananas = price_wildberries * 0.2

total_price = (price_strawberries * quantity_strawberries + price_bananas * quantity_bananas + price_oranges
               * quantity_oranges + price_wildberries * quantity_wildberries)
print(f"{total_price:.2f}")
