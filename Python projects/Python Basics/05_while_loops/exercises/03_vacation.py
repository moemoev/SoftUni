vacation_cost = float(input())
balance = float(input())
spends_to_much = False
spend_in_a_row = 0
days_to_save = 0

while balance < vacation_cost:
    cash_flow_direction = str(input())
    amount_of_flow = float(input())
    days_to_save += 1
    if cash_flow_direction == 'save':
        balance += amount_of_flow
        spend_in_a_row = 0
    else:
        balance -= amount_of_flow
        spend_in_a_row += 1
        if balance < 0:
            balance = 0

    if spend_in_a_row == 5:
        spends_to_much = True
        break

if spends_to_much:
    print(f"You can't save the money.\n{days_to_save}")
else:
    print(f"You saved the money for {days_to_save} days.")
