money_to_live = float(input())
year_to_survive = int(input())
left_money = money_to_live
age = 18

for n in range(1800, year_to_survive + 1):
    if n % 2 == 0:
        left_money -= 12000
    else:
        left_money -= 12000 + 50 * age
    age += 1

if 0 <= left_money:
    print(
        f"Yes! He will live a carefree life and will have {left_money:.2f} dollars left.")
else:
    print(f"He will need {abs(left_money):.2f} dollars to survive.")
