volume = int(input())
debit_p1 = int(input())
debit_p2 = int(input())
hours = float(input())

water_p1 = debit_p1 * hours
water_p2 = debit_p2 * hours
total_water = water_p1 + water_p2
total_l_per_hour = debit_p1 + debit_p2

if total_water <= volume:
    print(f"The pool is {(total_water / volume * 100):.2f}% full. Pipe 1: {(water_p1 / total_water * 100):.2f}%.\
     Pipe 2: {(water_p2 / total_water * 100):.2f}%.")
else:
    print(
        f"For {(total_water / total_l_per_hour):.2f} hours the pool overflows with {(total_water - volume):.2f} liters.")
