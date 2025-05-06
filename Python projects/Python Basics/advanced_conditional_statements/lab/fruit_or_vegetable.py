food = str(input())
determined_kind_of_fruit = "unknown"

if food == "banana" or food == "apple" or food == "kiwi" or food == "cherry" or food == "lemon" or food == "grapes":
    determined_kind_of_fruit = "fruit"
elif food == "tomato" or food == "cucumber" or food == "pepper" or food == "carrot":
    determined_kind_of_fruit = "vegetable"

print(determined_kind_of_fruit)
