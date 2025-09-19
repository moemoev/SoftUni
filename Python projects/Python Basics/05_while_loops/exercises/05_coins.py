money = float(input())
coins = 0
total_coins = 0

while 0 < money:
    if money >= 2:
        coins = money // 2
        money -= coins * 2
    elif money >= 1:
        coins = money // 1
        money -= coins * 1
    elif money >= 0.5:
        coins = money // 0.5
        money -= coins * 0.5
    elif money >= 0.2:
        coins = money // 0.2
        money -= coins * 0.2
    elif money >= 0.1:
        coins = money // 0.1
        money -= coins * 0.1
    elif money >= 0.05:
        coins = money // 0.05
        money -= coins * 0.05
    elif money >= 0.02:
        coins = money // 0.02
        money -= coins * 0.02
    elif money >= 0.01:
        coins = money // 0.01
        money -= coins * 0.01
    total_coins += coins
    money = round(money, 2)
print(f"{int(total_coins)}")
