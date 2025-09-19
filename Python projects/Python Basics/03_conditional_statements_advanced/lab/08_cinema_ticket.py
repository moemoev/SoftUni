day = str(input())
price = 12

if day == "Wednesday" or day == "Thursday":
    price = 14
elif day == "Saturday" or day == "Sunday":
    price = 16
print(f"{price}")
