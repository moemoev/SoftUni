expected_money = float(input())
command = str(input())
total_income = 0.0

while command != 'Party!':
    name_cocktail = command
    number_cocktails = int(input())
    price_cocktail = len(name_cocktail)
    bill_cocktails = number_cocktails * price_cocktail
    if bill_cocktails % 2 == 1:
        bill_cocktails *= 0.75
    total_income += bill_cocktails
    if expected_money <= total_income:
        break
    command = str(input())
if command == 'Party!':
    print(f"We need {(expected_money - total_income):.2f} leva more.")
else:
    print(f"Target acquired.")
print(f"Club income - {total_income:.2f} leva.")