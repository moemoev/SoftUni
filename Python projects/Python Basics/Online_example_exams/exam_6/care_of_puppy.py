quantity_food = int(input()) * 1000
command = str(input())
food_needed = 0

while command != 'Adopted':
    food_needed += int(command)
    command = str(input())

if food_needed <= quantity_food:
    print(f"Food is enough! Leftovers: {quantity_food - food_needed} grams.")
else:
    print(f"Food is not enough. You need {food_needed - quantity_food} grams more.")
