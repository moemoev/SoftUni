destination = str(input())
date = str(input())
sleepovers = int(input())
price_per_sleepover = 0

if destination == 'France':
    if date == '21-23':
        price_per_sleepover = 30
    elif date == '24-27':
        price_per_sleepover = 35
    else:
        price_per_sleepover = 40
elif destination == 'Italy':
    if date == '21-23':
        price_per_sleepover = 28
    elif date == '24-27':
        price_per_sleepover = 32
    else:
        price_per_sleepover = 39
else:
    if date == '21-23':
        price_per_sleepover = 32
    elif date == '24-27':
        price_per_sleepover = 37
    else:
        price_per_sleepover = 43

total_cost = sleepovers * price_per_sleepover

print(f"Easter trip to {destination} : {total_cost:.2f} leva.")
