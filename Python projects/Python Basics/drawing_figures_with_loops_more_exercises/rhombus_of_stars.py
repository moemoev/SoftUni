n = int(input())

for row in range(1, n + 1):
    for intervals in range(n - row):
        print(" ", end="")
    print("*", end="")
    for asterisks in range(row - 1):
        print(" *", end="")
    print()

for row in range(1, n):
    for intervals in range(row):
        print(" ", end="")
    print("*", end="")
    for asterisks in range(n - row -1):
        print(" *", end="")
    print()
