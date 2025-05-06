season = str(input())
km_per_month = float(input())

pay_per_season = 0.0

if km_per_month <= 5000:
    if season == 'Spring' or season == 'Autumn':
        pay_per_season = km_per_month * 4 * 0.75 * 0.9
    elif season == 'Summer':
        pay_per_season = km_per_month * 4 * 0.9 * 0.9
    else:
        pay_per_season = km_per_month * 4 * 1.05 * 0.9
elif km_per_month <= 10000:
    if season == 'Spring' or season == 'Autumn':
        pay_per_season = km_per_month * 4 * 0.95 * 0.9
    elif season == 'Summer':
        pay_per_season = km_per_month * 4 * 1.1 * 0.9
    else:
        pay_per_season = km_per_month * 4 * 1.25 * 0.9
elif km_per_month <= 20000:
    pay_per_season = km_per_month * 4 * 1.45 * 0.9

print(f"{pay_per_season:.2f}")
