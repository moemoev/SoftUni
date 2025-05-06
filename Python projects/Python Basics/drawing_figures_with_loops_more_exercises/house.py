n = int(input())

for rows_roof in range((n + 1) // 2):
    if n % 2 == 0:
        for space in range((n // 2 - 1) - rows_roof, 0, -1):
            print("-", end="")
        for asterisk in range(rows_roof + 1):
            print("**", end="")
        for space in range((n // 2 - 1) - rows_roof, 0, -1):
            print("-", end="")
    else:
        for space in range((n // 2) - rows_roof, 0, -1):
            print("-", end="")
        print("*", end="")
        for asterisk in range(rows_roof):
            print("**", end="")
        for space in range((n // 2) - rows_roof, 0, -1):
            print("-", end="")
    print("")
for rows_foundation in range(n // 2):
    print("|", end="")
    if n % 2 == 0:
        for asterisk in range(n - 2):
            print("*", end="")
    else:
        for asterisk in range(n - 2):
            print("*", end="")
    print("|", end="")
    print("")
