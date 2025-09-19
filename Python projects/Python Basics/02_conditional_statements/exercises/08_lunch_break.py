import math

name = str(input())
time_episode = int(input())
time_break = int(input())
time_lunch = time_break * 1 / 8
time_recover = time_break * 1 / 4
time_needed = time_episode + time_lunch + time_recover

if time_break >= time_needed:
    print(
        f"You have enough time to watch {name} and left with {math.ceil(time_break - time_needed)} minutes free time.")
else:
    print(f"You don't have enough time to watch {name}, you need {math.ceil(time_needed - time_break)} more minutes.")
