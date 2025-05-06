city = str(input())
sales = float(input())
city_is_valid = True
profit = 0.0

if city == "Sofia":
    if 0 <= sales <= 500:
        profit = 0.05
    elif 500 < sales <= 1000:
        profit = 0.07
    elif 1000 < sales <= 10000:
        profit = 0.08
    elif 10000 < sales:
        profit = 0.12
    else:
        sales_is_valid = False
elif city == "Varna":
    if 0 <= sales <= 500:
        profit = 0.045
    elif 500 < sales <= 1000:
        profit = 0.075
    elif 1000 <= sales <= 10000:
        profit = 0.1
    elif 10000 < sales:
        profit = 0.13
    else:
        sales_is_valid = False
elif city == "Plovdiv":
    if 0 <= sales <= 500:
        profit = 0.055
    elif 500 < sales <= 1000:
        profit = 0.08
    elif 1000 < sales <= 10000:
        profit = 0.12
    elif 10000 < sales:
        profit = 0.145
    else:
        sales_is_valid = False
else:
    city_is_valid = False

if city_is_valid and profit != 0:                 # profit !=0 ensures that the input for sales is valid!
    print(f"{sales * profit:.2f}")
else:
    print(f"error")
