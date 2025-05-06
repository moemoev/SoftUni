degree = int(input())
daytime = str(input())
outfit = ''  # outfit and shoes could be set to shirt and moccasins since they occur 5 times out of 9
shoes = ''   # this would result in far less entries, but this way it is easier to follow the purpose of the exercise

if 10 <= degree <= 18:
    if daytime == "Morning":
        outfit = 'Sweatshirt'
        shoes = 'Sneakers'
    elif daytime == "Afternoon":
        outfit = 'Shirt'
        shoes = 'Moccasins'
    else:
        outfit = 'Shirt'
        shoes = 'Moccasins'
elif 18 < degree <= 24:
    if daytime == "Morning":
        outfit = 'Shirt'
        shoes = 'Moccasins'
    elif daytime == "Afternoon":
        outfit = 'T-Shirt'
        shoes = 'Sandals'
    else:
        outfit = 'Shirt'
        shoes = 'Moccasins'
else:
    if daytime == "Morning":
        outfit = 'T-Shirt'
        shoes = 'Sandals'
    elif daytime == "Afternoon":
        outfit = 'Swim Suit'
        shoes = 'Barefoot'
    else:
        outfit = 'Shirt'
        shoes = 'Moccasins'

print(F"It's {degree} degrees, get your {outfit} and {shoes}.")
