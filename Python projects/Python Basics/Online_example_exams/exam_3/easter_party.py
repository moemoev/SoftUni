number_guests = int(input())
cost_envelope = float(input())
budget = float(input())
price_cake = budget * 0.1

if 10 <= number_guests <= 15:
    cost_envelope *= 0.85
elif 15 < number_guests <= 20:
    cost_envelope *= 0.8
elif 20 < number_guests:
    cost_envelope *= 0.75

total_cost = number_guests * cost_envelope + price_cake
if total_cost <= budget:
    print(f"It is party time! {(budget - total_cost):.2f} leva left.")
else:
    print(f"No party! {(total_cost - budget):.2f} leva needed.")
