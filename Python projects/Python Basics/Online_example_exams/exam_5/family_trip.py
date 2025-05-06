budget = float(input())
number_sleepovers = int(input())
price_per_sleepover = float(input())
percentage_fixcosts = int(input())

if 7 < number_sleepovers:
    price_per_sleepover *= 0.95
total_cost = number_sleepovers * price_per_sleepover + budget * percentage_fixcosts / 100

if total_cost <= budget:
    print(f"Ivanovi will be left with {(budget - total_cost):.2f} leva after vacation.")
else:
    print(f"{(total_cost - budget):.2f} leva needed.")
