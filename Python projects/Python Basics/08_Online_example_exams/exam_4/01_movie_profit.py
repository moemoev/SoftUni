name_movie = str(input())
number_days = int(input())
number_tickets = int(input())
price_ticket = float(input())
mortgage_cinema_percent = int(input())

total_cost = number_days * number_tickets * price_ticket * (1 - mortgage_cinema_percent / 100)

print(f"The profit from the movie {name_movie} is {total_cost:.2f} lv.")
