fuel_type = str(input())  # Diesel,Gasoline,Gas
tank_level = float(input())

if fuel_type != 'Diesel' and fuel_type != 'Gasoline' and fuel_type != 'Gas':
    print(f"Invalid fuel!")
elif tank_level < 25:
    print(f"Fill your tank with {fuel_type.lower()}!")
else:
    print(f"You have enough {fuel_type.lower()}.")
