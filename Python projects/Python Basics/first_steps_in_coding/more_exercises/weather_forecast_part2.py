temperature_in_celsius = float(input())

if 26 <= temperature_in_celsius <= 35:
    print(f"Hot")
elif 20 < temperature_in_celsius < 26:
    print(f"Warm")
elif 15 <= temperature_in_celsius <= 20:
    print(f"Mild")
elif 12 <= temperature_in_celsius < 15:
    print(f"Cool")
elif 5 <= temperature_in_celsius < 12:
    print(f"Cold")
else:
    print(f"unknown")
