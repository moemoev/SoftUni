name_film = str(input())
projection_type = str(input())
number_tickets = int(input())

if projection_type == 'normal':
    if name_film == 'A Star Is Born':
        ticket_price = 7.5
    elif name_film == 'Bohemian Rhapsody':
        ticket_price = 7.35
    elif name_film == 'Green Book':
        ticket_price = 8.15
    elif name_film == 'The Favourite':
        ticket_price = 8.75
elif projection_type == 'luxury':
    if name_film == 'A Star Is Born':
        ticket_price = 10.5
    elif name_film == 'Bohemian Rhapsody':
        ticket_price = 9.45
    elif name_film == 'Green Book':
        ticket_price = 10.25
    elif name_film == 'The Favourite':
        ticket_price = 11.55
elif projection_type == 'ultra luxury':
    if name_film == 'A Star Is Born':
        ticket_price = 13.5
    elif name_film == 'Bohemian Rhapsody':
        ticket_price = 12.75
    elif name_film == 'Green Book':
        ticket_price = 13.25
    elif name_film == 'The Favourite':
        ticket_price = 13.95

total_price = number_tickets * ticket_price
print(f"{name_film} -> {total_price:.2f} lv.")
