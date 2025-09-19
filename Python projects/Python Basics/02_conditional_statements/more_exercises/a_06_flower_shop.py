import math

price_magnolias = 3.25
price_hyacinths = 4
price_roses = 3.5
price_cacti = 8

number_magnolias = int(input())
number_hyacinths = int(input())
number_roses = int(input())
number_cacti = int(input())
price_bday_present = float(input())

taxes = 00.5

total_income = (price_magnolias * number_magnolias + price_hyacinths * number_hyacinths + price_roses * number_roses
                + price_cacti * number_cacti) * 0.95

if price_bday_present <= total_income:
    money_left = total_income - price_bday_present
    print(f"She is left with {math.floor(money_left)} leva.")
else:
    missing_money = price_bday_present - total_income
    pass
    print(f"She will have to borrow {math.ceil(missing_money)} leva.")
