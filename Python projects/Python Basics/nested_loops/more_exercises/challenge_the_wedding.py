number_men = int(input())
number_women = int(input())
number_tables = int(input())
count_dates = 0
for men in range(1, number_men + 1):
    for women in range(1, number_women + 1):
        count_dates += 1
        print(f"({men} <-> {women})", end=" ")
        if count_dates == number_tables:
            break
    if count_dates == number_tables:
        break
