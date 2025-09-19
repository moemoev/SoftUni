numbers = int(input())
left_sum = 0
right_sum = 0

for iteration in range(numbers):
    left_sum += int(input())
for iteration in range(numbers):
    right_sum += int(input())

if left_sum == right_sum:
    print(f"Yes, sum = {left_sum}")
else:
    print(f"No, diff = {abs(left_sum - right_sum)}")
