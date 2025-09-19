quantity_numbers = int(input())

p1 = 0.0
p2 = 0.0
p3 = 0.0
p4 = 0.0
p5 = 0.0

for i in range(quantity_numbers):
    number = int(input())
    if number < 200:
        p1 += 1
    elif 200 <= number < 400:
        p2 += 1
    elif 400 <= number < 600:
        p3 += 1
    elif 600 <= number < 800:
        p4 += 1
    elif 800 <= number <= 1000:
        p5 += 1

print(f"{(p1 / quantity_numbers * 100):.2f}%")
print(f"{(p2 / quantity_numbers * 100):.2f}%")
print(f"{(p3 / quantity_numbers * 100):.2f}%")
print(f"{(p4 / quantity_numbers * 100):.2f}%")
print(f"{(p5 / quantity_numbers * 100):.2f}%")
