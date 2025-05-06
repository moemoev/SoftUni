price_vegetables_per_kg = float(input())
price_fruits_per_kg = float(input())
kg_vegetables = int(input())
kg_fruits = int(input())

total_price_lv = price_vegetables_per_kg * kg_vegetables + price_fruits_per_kg * kg_fruits
total_price_eur = total_price_lv / 1.94

print(f"{total_price_eur:.2f}")
