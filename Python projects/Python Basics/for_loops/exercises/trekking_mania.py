number_of_groups = int(input())
climbers_musala = 0
climbers_montblanc = 0
climbers_kilimandscharo = 0
climbers_ktwo = 0
climbers_everest = 0
sum_climbers = 0

for groups in range(number_of_groups):
    members_per_group = int(input())
    sum_climbers += members_per_group
    if members_per_group <= 5:
        climbers_musala += members_per_group
    elif members_per_group <= 12:
        climbers_montblanc += members_per_group
    elif members_per_group <= 25:
        climbers_kilimandscharo += members_per_group
    elif members_per_group <= 40:
        climbers_ktwo += members_per_group
    else:
        climbers_everest += members_per_group

print(f"{(climbers_musala / sum_climbers * 100):.2f}%")
print(f"{(climbers_montblanc / sum_climbers * 100):.2f}%")
print(f"{(climbers_kilimandscharo / sum_climbers * 100):.2f}%")
print(f"{(climbers_ktwo / sum_climbers * 100):.2f}%")
print(f"{(climbers_everest / sum_climbers * 100):.2f}%")
