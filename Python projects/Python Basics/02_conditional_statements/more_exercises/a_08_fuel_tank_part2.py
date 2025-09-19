fuel_type = str(input())  # Gas, Gasoline, Diesel
quantity_fuel = float(input())
gets_discount = str(input())

price_gasoline = 2.22
price_diesel = 2.33
price_gas = 0.93

actual_fuel_price = 0
total_cost = 0

if gets_discount == 'Yes':
    price_gasoline -= 0.18
    price_diesel -= 0.12
    price_gas -= 0.08

if fuel_type == 'Gas':
    actual_fuel_price = price_gas
elif fuel_type == 'Gasoline':
    actual_fuel_price = price_gasoline
else:
    actual_fuel_price = price_diesel

if 20 <= quantity_fuel <= 25:
    total_cost = actual_fuel_price * quantity_fuel * 0.92
elif 25 < quantity_fuel:
    total_cost = actual_fuel_price * quantity_fuel * 0.9
else:
    total_cost = actual_fuel_price * quantity_fuel

print(f"{total_cost:.2f} lv.")
