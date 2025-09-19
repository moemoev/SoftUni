hall_capacity = int(input())
income = 0
command = str(input())
cinema_full = False
while command != 'Movie time!':
    number_tickets = int(command)
    if hall_capacity < number_tickets:
        number_tickets = hall_capacity
        cinema_full = True
        break
    if number_tickets % 3 == 0:
        tickets_cost = number_tickets * 5 - 5
    else:
        tickets_cost = number_tickets * 5
    income += tickets_cost
    hall_capacity -= number_tickets
    command = str(input())
if cinema_full:
    print(f"The cinema is full.")
else:
    print(f"There are {hall_capacity} seats left in the cinema.")
print(f"Cinema income - {income} lv.")
