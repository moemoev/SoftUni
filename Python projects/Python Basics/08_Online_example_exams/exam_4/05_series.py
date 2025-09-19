budget = float(input())
number_series = int(input())
total_cost_series = 0
budget_is_high_enough = False

for series in range(number_series):
    name_series = str(input())
    price_series = float(input())
    if name_series == 'Thrones':
        price_series *= 0.5
    elif name_series == 'Lucifer':
        price_series *= 0.6
    elif name_series == 'Protector':
        price_series *= 0.7
    elif name_series == 'TotalDrama':
        price_series *= 0.8
    elif name_series == 'Area':
        price_series *= 0.9
    total_cost_series += price_series
if total_cost_series <= budget:
    budget_is_high_enough = True

if budget_is_high_enough:
    print(f"You bought all the series and left with {(budget - total_cost_series):.2f} lv.")
else:
    print(f"You need { (total_cost_series-budget):.2f} lv. more to buy the series!")
