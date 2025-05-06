money = str(input())
total_money = 0.0

while money != 'NoMoreMoney':
    if float(money) < 0:
        print(f"Invalid operation!")
        break
    total_money += float(money)
    print(f"Increase: {float(money):.2f}")
    money = str(input())
print(f"Total: {total_money:.2f}")
