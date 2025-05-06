fruit = str(input())
day_of_the_week = str(input())
quantity = float(input())
price = 0
is_weekday = True
day_of_the_week_is_valid = False
fruit_is_valid = True

if day_of_the_week == "Monday" \
        or day_of_the_week == "Tuesday" \
        or day_of_the_week == "Wednesday" \
        or day_of_the_week == "Thursday" \
        or day_of_the_week == "Friday":
    day_of_the_week_is_valid = True
elif day_of_the_week == "Saturday" \
        or day_of_the_week == "Sunday":
    day_of_the_week_is_valid = True
    is_weekday = False

if is_weekday:
    if fruit == "banana":
        price = 2.5
    elif fruit == "apple":
        price = 1.2
    elif fruit == "orange":
        price = 0.85
    elif fruit == "grapefruit":
        price = 1.45
    elif fruit == "kiwi":
        price = 2.7
    elif fruit == "pineapple":
        price = 5.5
    elif fruit == "grapes":
        price = 3.85
    else:
        fruit_is_valid = False

else:
    if fruit == "banana":
        price = 2.7
    elif fruit == "apple":
        price = 1.25
    elif fruit == "orange":
        price = 0.9
    elif fruit == "grapefruit":
        price = 1.6
    elif fruit == "kiwi":
        price = 3
    elif fruit == "pineapple":
        price = 5.6
    elif fruit == "grapes":
        price = 4.2
    else:
        fruit_is_valid = False

if price != 0 and fruit_is_valid and day_of_the_week_is_valid:
    print(f"{price * quantity:.2f}")
else:
    print(f"error")
