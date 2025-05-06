number_of_days = int(input())
income = 0.0
days_won = 0
days_lost = 0


for days in range(number_of_days):
    command = str(input())
    wins = 0
    losses = 0
    income_day = 0
    while command != 'Finish':
        result = str(input())
        if result == 'win':
            income_day += 20
            wins += 1
        else:
            losses += 1
        command = str(input())
    if losses < wins:
        days_won += 1
        income += income_day * 1.1
    else:
        days_lost += 1
        income += income_day
if days_lost < days_won:
    print(f"You won the tournament! Total raised money: {(income * 1.2):.2f}")
else:
    print(f"You lost the tournament! Total raised money: {income:.2f}")
