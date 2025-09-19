import math

number_days = int(input())
left_food = int(input())
food_dog = float(input())
food_cat = float(input())
food_turtle = float(input())

needed_supply = number_days * (food_dog + food_turtle * 0.001 + food_cat)

if needed_supply < left_food:
    food = left_food - needed_supply
    print(f"{math.floor(food)} kilos of food left.")
else:
    food = needed_supply - left_food
    print(f"{math.ceil(food)} more kilos of food are needed.")
