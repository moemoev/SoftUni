budget = float(input())
gpus = int(input())
cpus = int(input())
ram = int(input())
cost_gpus = gpus * 250
cost_cpus = cpus * cost_gpus * 0.35
cost_ram = ram * cost_gpus * 0.1
total_cost = cost_gpus + cost_cpus + cost_ram
if gpus > cpus:
    total_cost = total_cost * 0.85

if budget >= total_cost:
    print(f"You have {budget - total_cost:.2f} leva left!")
else:
    print(f"Not enough money! You need {total_cost - budget:.2f} leva more!")
