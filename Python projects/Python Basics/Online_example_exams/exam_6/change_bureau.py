bitcoin = 1168
chinese_juan_in_dollars = 0.15
dollar = 1.76
euro = 1.95

number_bitcoins = int(input())
number_chinese_juan = float(input())
percentage_commission = float(input()) / 100

total_money_in_euro = (number_bitcoins * bitcoin + number_chinese_juan * chinese_juan_in_dollars * dollar) / 1.95
commission = total_money_in_euro * percentage_commission
money_left = total_money_in_euro - commission

print(f"{money_left:.2f}")
