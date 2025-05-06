calories_burned_per_minute = 5
walk_in_minutes = int(input())
number_walks = int(input())
intake_calories = int(input())

calories_burned_total = calories_burned_per_minute * walk_in_minutes * number_walks

if calories_burned_total >= intake_calories / 2:
    print(f"Yes, the walk for your cat is enough. Burned calories per day: {calories_burned_total}.")
else:
    print(f"No, the walk for your cat is not enough. Burned calories per day: {calories_burned_total}.")
