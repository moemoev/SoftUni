n = int(input())

for row in range(n):
    # create top frame
    if row == 0 or row == n - 1:
        for left_upper_frame in range(2 * n):
            print("*", end="")
        for intervals_upper_frame in range(n):
            print(" ", end="")
        for right_upper_frame in range(2 * n):
            print("*", end="")
    else:
        print("*", end="")
        for left_glass in range(2 * n - 2):
            print("/", end="")
        print("*", end="")
        if row == (n - 1) // 2:
            for middle_frame in range(n):
                print("|", end="")
        else:
            for middle_frame in range(n):
                print(" ", end="")
        print("*", end="")
        for right_glass in range(2 * n - 2):
            print("/", end="")
        print("*", end="")

    print()
