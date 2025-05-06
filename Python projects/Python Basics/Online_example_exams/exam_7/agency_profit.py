name_flight_company = str(input())
tickets_adults = int(input())
tickets_children = int(input())
price_ticket_adult = float(input())
service_fee = float(input())

income = tickets_adults * (price_ticket_adult + service_fee) + tickets_children * (
            price_ticket_adult * 0.3 + service_fee)
print(f"The profit of your agency from {name_flight_company} tickets is {income * 0.2:.2f} lv.")
