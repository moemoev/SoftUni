party_size = int(input())
days = int(input())
coins = 0

for day in range(1, days + 1):
    if day % 10 == 0:
        party_size -= 2
    if day % 15 == 0:
        party_size += 5
    coins += 50
    coins -= 2 * party_size
    if day % 3 == 0:
        coins -= 3 * party_size
    if day % 5 == 0:
        coins += 20 * party_size
        if day % 3 == 0:
            coins -= 2 * party_size
print(f"{party_size} companions received {int(coins / party_size)} coins each.")


'''
TASK:
As a young adventurer, you travel with your party around the world, seeking for gold and glory. But you need to split 
the profit among your companions.
You will receive a party size. After that you receive the days of the adventure. 
Every day, you are earning 50 coins, but you also spent 2 coins per companion for food. 
Every 3rd (third) day, you have a motivational party, spending 3 coins per companion for drinking water. 
Every 5th (fifth) day you slay a boss monster and you gain 20 coins per companion. But if you have a motivational party 
the same day, you spent additional 2 coins per companion. 
Every 10th (tenth) day at the start of the day, 2 (two) of your companions leave, but every 15th (fifteenth) day 5 (five)
new companions are joined at the beginning of the day.
You should calculate how much coins gets each companion at the end of the adventure.
'''
