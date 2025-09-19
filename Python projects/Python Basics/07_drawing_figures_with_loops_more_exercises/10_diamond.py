n = int(input())
if n % 2 == 0:
    rows = n - 1
else:
    rows = n

for row in range(2 * rows - 1):
    if row == 0:
        for interval_left in range((n - 1) / 2):
            print("-", end="")
    else:
        pass