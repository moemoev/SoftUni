number_days = int(input())
amount_food = float(input())
amount_biscuits = 0
total_food_dog = 0
total_food_cat = 0

for day in range(1, number_days + 1):
    food_eaten_by_dog = int(input())
    food_eaten_by_cat = int(input())
    total_food_dog += food_eaten_by_dog
    total_food_cat += food_eaten_by_cat
    if day % 3 == 0:
        amount_biscuits += (food_eaten_by_cat + food_eaten_by_dog) * 0.1

print(f"Total eaten biscuits: {round(amount_biscuits)}gr.")
print(f"{(total_food_dog + total_food_cat) / amount_food * 100:.2f}% of the food has been eaten.")
print(f"{(total_food_dog / (total_food_dog + total_food_cat)) * 100:.2f}% eaten from the dog.")
print(f"{(total_food_cat / (total_food_dog + total_food_cat)) * 100:.2f}% eaten from the cat.")
