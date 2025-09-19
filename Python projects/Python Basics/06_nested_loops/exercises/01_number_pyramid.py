number = int(input())
counter = 0

for row in range(1, number + 1):
    for column in range(1, row + 1):
        counter += 1
        print(f"{counter}", end=" ")
        if counter == number:
            break
    if counter == number:
        break
    print()
