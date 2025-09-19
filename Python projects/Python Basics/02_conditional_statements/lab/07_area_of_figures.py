from math import pi
form = str(input())
if form == "square":
    length = float(input())
    area = length * length
    print(f"{area:.3f}")
elif form == "rectangle":
    length = float(input())
    width = float(input())
    area = length * width
    print(f"{area:.3f}")
elif form == "circle":
    radius = float(input())
    area = pi * radius * radius
    print(f"{area:.3f}")
elif form == "triangle":
    side = float(input())
    hight = float(input())
    area = side * hight / 2
    print(f"{area:.3f}")
