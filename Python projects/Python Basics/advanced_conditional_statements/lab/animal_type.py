animal = str(input())
animal_is_known = True
animal_type = ""

if animal == "dog":
    animal_type = "mammal"
elif animal == "crocodile" or animal == "tortoise" or animal == "snake":
    animal_type = "reptile"
else:
    animal_is_known = False

if animal_is_known:
    print(animal_type)
else:
    print("unknown")
