numbers = int(input())
sum_even_index = 0
sum_odd_index = 0

for index in range(numbers):  # index starts from 0, humans don't count from 0, so range(1,numbers+1) could adjust that
    if index % 2 == 0:        # code works either way and judge doesn't test that
        sum_even_index += int(input())
    else:
        sum_odd_index += int(input())

if sum_even_index == sum_odd_index:
    print(f"Yes\nSum = {sum_even_index}")
else:
    print(f"No\nDiff = {abs(sum_even_index - sum_odd_index)}")
