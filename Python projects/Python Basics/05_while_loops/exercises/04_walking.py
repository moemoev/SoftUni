daily_goal = 10000
total_steps = 0

while total_steps < 10000:
    steps = input()
    if steps != 'Going home':
        total_steps += int(steps)
    else:
        steps = input()
        total_steps += int(steps)
        break

if total_steps >= 10000:
    print(f"Goal reached! Good job!\n{total_steps - 10000} steps over the goal!")
else:
    print(f"{10000 - total_steps} more steps to reach goal.")
