number_groups = int(input())
musala = 0.0
montblanc = 0.0
kilimandjaro = 0.0
ktwo = 0.0
everest = 0.0
total_amount_member = 0

for group in range(number_groups):
    members_in_group = int(input())
    total_amount_member += members_in_group
    if members_in_group <= 5:
        musala += members_in_group
    elif 6 <= members_in_group <= 12:
        montblanc += members_in_group
    elif 13 <= members_in_group <= 25:
        kilimandjaro += members_in_group
    elif 26 <= members_in_group <= 40:
        ktwo += members_in_group
    elif 41 <= members_in_group:
        everest += members_in_group

print(f"{musala / total_amount_member * 100:.2f}%")
print(f"{montblanc / total_amount_member * 100:.2f}%")
print(f"{kilimandjaro / total_amount_member * 100:.2f}%")
print(f"{ktwo / total_amount_member * 100:.2f}%")
print(f"{everest / total_amount_member * 100:.2f}%")
