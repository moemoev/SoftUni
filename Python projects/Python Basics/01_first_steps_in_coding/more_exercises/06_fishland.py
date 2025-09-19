price_makarel_per_kg = float(input())
price_zaza_per_kg = float(input())
quantity_palamud_kg = float(input())
quantity_saphrid_kg = float(input())
quantity_muscles_kg = float(input())

total_price = quantity_palamud_kg * price_makarel_per_kg * 1.6 + quantity_saphrid_kg * price_zaza_per_kg * 1.8 \
              + quantity_muscles_kg * 7.5

print(f"{total_price:.2f}")
