number_months = int(input())
cost_water = 20
cost_internet = 15
costs_fixed = 0
total_cost_water = 0
total_cost_internet = 0
total_cost_fixed = 0
total_cost_electricity = 0
total_cost = 0

for month in range(number_months):
    cost_electricity = float(input())
    total_cost_electricity += cost_electricity
    total_cost_water += cost_water
    total_cost_internet += cost_internet
    total_cost_fixed += (cost_water + cost_internet + cost_electricity) * 1.2


total_cost = (total_cost_electricity + total_cost_water + total_cost_internet + total_cost_fixed)
print(f"Electricity: {total_cost_electricity:.2f} lv")
print(f"Water: {total_cost_water:.2f} lv")
print(f"Internet: {total_cost_internet:.2f} lv")
print(f"Other: {total_cost_fixed:.2f} lv")
print(f"Average: {(total_cost / number_months):.2f} lv")
