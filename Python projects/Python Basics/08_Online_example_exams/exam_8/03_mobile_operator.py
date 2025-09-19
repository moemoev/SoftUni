duration = str(input())
contract_type = str(input())
mobile_internet = str(input())
number_months = int(input())
monthly_price = 0
internet_price = 0
reduction = False

if duration == 'one':
    if contract_type == 'Small':
        monthly_price = 9.98
    elif contract_type == 'Middle':
        monthly_price = 18.99
    elif contract_type == 'Large':
        monthly_price = 25.98
    elif contract_type == 'ExtraLarge':
        monthly_price = 35.99
elif duration == 'two':
    reduction = True
    if contract_type == 'Small':
        monthly_price = 8.58
    elif contract_type == 'Middle':
        monthly_price = 17.09
    elif contract_type == 'Large':
        monthly_price = 23.59
    elif contract_type == 'ExtraLarge':
        monthly_price = 31.79

if mobile_internet == 'yes':
    if 0 < monthly_price <= 10.0:
        internet_price = 5.5
    elif 10 < monthly_price <= 30.0:
        internet_price = 4.35
    elif 30 <= monthly_price:
        internet_price = 3.85

total_price = number_months * (monthly_price + internet_price)
if reduction:
    total_price *= 0.9625

print(f"{total_price:.2f} lv.")
