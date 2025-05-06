budget_movie = float(input())
destination = str(input())
season = str(input())
number_days = int(input())
cost_per_day = 0.0

if destination == 'Dubai':
    if season == 'Winter':
        cost_per_day = 45000
    else:
        cost_per_day = 40000
    cost_per_day *= 0.7
elif destination == 'Sofia':
    if season == 'Winter':
        cost_per_day = 17000
    else:
        cost_per_day = 12500
    cost_per_day *= 1.25
else:
    if season == 'Winter':
        cost_per_day = 24000
    else:
        cost_per_day = 20250
total_cost = number_days * cost_per_day
if total_cost < budget_movie:
    print(f"The budget for the movie is enough! We have {(budget_movie - total_cost):.2f} leva left!")
else:
    print(f"The director needs {(total_cost - budget_movie):.2f} leva more!")
