first_result = str(input())
second_result = str(input())
third_result = str(input())
wins = 0
losses = 0
draws = 0

if first_result[0] > first_result[2]:
    wins += 1
elif first_result[0] < first_result[2]:
    losses += 1
else:
    draws += 1

if second_result[0] > second_result[2]:
    wins += 1
elif second_result[0] < second_result[2]:
    losses += 1
else:
    draws += 1

if third_result[0] > third_result[2]:
    wins += 1
elif third_result[0] < third_result[2]:
    losses += 1
else:
    draws += 1

print(f"Team won {wins} games.")
print(f"Team lost {losses} games.")
print(f"Drawn games: {draws}")
