max_age_lilly = int(input())
price_washing_machine = float(input())
price_each_toy = int(input())
money_saved = 0.0

for age_lilly in range(1, max_age_lilly + 1):
    if age_lilly % 2 == 0:
        money_saved += age_lilly / 2 * 10 - 1
    else:
        money_saved += price_each_toy

if money_saved >= price_washing_machine:
    print(f"Yes! {money_saved - price_washing_machine:.2f}")
else:
    print(f"No! {price_washing_machine - money_saved:.2f}")
