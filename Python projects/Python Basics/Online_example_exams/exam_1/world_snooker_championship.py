game = str(input())
ticket_type = str(input())
number_tickets = int(input())
picture = str(input())
wants_picture = False
total_price = 0

if picture == 'Y':
    wants_picture = True

if game == 'Quarter final':
    if ticket_type == 'Standard':
        ticket_price = 55.5
    elif ticket_type == 'Premium':
        ticket_price = 105.2
    else:
        ticket_price = 118.9
if game == 'Semi final':
    if ticket_type == 'Standard':
        ticket_price = 75.88
    elif ticket_type == 'Premium':
        ticket_price = 125.22
    else:
        ticket_price = 300.40
if game == 'Final':
    if ticket_type == 'Standard':
        ticket_price = 110.10
    elif ticket_type == 'Premium':
        ticket_price = 160.66
    else:
        ticket_price = 400

total_price = ticket_price * number_tickets

if 4000 < total_price:
    total_price *= 0.75
elif 2500 < total_price:
    total_price *= 0.9
    if wants_picture:
        total_price += number_tickets * 40
else:
    if wants_picture:
        total_price += number_tickets * 40

print(f"{total_price:.2f}")
