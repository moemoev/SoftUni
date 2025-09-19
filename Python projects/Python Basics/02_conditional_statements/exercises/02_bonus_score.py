score = int(input())

if score < 100:
    bonus_score = 5                                           # This is still a global variable!!!
elif 100 < score <= 1000:
    bonus_score = score * 0.2                                 # this also! and so on
else:
    bonus_score = score * 0.1

if score % 2 == 0:
    bonus_score += 1
elif score % 10 == 5:
    bonus_score += 2

print(f"{bonus_score}\n{score + bonus_score}")
