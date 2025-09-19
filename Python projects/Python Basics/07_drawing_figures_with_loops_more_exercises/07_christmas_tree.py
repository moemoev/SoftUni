n = int(input())

for row in range(n + 1):
    for intervals_left in range(n - row):
        print(" ", end="")
    for asterisks_left in range(row):
        print("*", end="")
    print(" | ", end="")  # middlePrint
    for asterisk_right in range(row):
        print("*", end="")
    print()
