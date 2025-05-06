age = float(input())
gender = str(input())

title = ""

if age >= 16:
    if gender == "m":
        title = "Mr."
    else:
        title = "Ms."
else:
    if gender == "m":
        title = "Master"
    else:
        title = "Miss"

print(title)
