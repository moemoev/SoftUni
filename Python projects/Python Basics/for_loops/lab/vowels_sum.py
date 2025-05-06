text = str(input())
sum_points = 0

for letters in text:
    if letters == 'a':
        sum_points += 1
    elif letters == 'e':
        sum_points += 2
    elif letters == 'i':
        sum_points += 3
    elif letters == 'o':
        sum_points += 4
    elif letters == 'u':
        sum_points += 5
print(sum_points)
