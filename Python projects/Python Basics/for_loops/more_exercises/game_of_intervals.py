number_turns = int(input())
points = 0
zero_to_nine = 0
ten_to_nineteen = 0
twenty_to_twenty_nine = 0
thirty_to_thirty_nine = 0
forty_to_fifty = 0
invalid = 0

for turn in range(number_turns):
    number = float(input())
    if number < 0 or 50 < number:
        points /= 2
        invalid += 1
    elif 0 <= number < 10:
        points += number * 0.2
        zero_to_nine += 1
    elif 10 <= number < 20:
        points += number * 0.3
        ten_to_nineteen += 1
    elif 20 <= number < 30:
        points += number * 0.4
        twenty_to_twenty_nine += 1
    elif 30 <= number < 40:
        points += 50
        thirty_to_thirty_nine += 1
    elif 40 <= number <= 50:
        points += 100
        forty_to_fifty += 1

print(f"{points:.2f}")
print(f"From 0 to 9: {(zero_to_nine / number_turns * 100):.2f}%")
print(f"From 10 to 19: {(ten_to_nineteen / number_turns * 100):.2f}%")
print(f"From 20 to 29: {(twenty_to_twenty_nine / number_turns * 100):.2f}%")
print(f"From 30 to 39: {(thirty_to_thirty_nine / number_turns * 100):.2f}%")
print(f"From 40 to 50: {(forty_to_fifty / number_turns * 100):.2f}%")
print(f"Invalid numbers: {(invalid / number_turns * 100):.2f}%")
