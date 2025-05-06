movie = str(input())
food = str(input())
number_tickets = int(input())
price_per_person = 0

if movie == 'John Wick':
    if food == 'Drink':
        price_per_person = 12
    elif food == 'Popcorn':
        price_per_person = 15
    else:
        price_per_person = 19
elif movie == 'Star Wars':
    if food == 'Drink':
        price_per_person = 18
    elif food == 'Popcorn':
        price_per_person = 25
    else:
        price_per_person = 30
else:
    if food == 'Drink':
        price_per_person = 9
    elif food == 'Popcorn':
        price_per_person = 11
    else:
        price_per_person = 14

if movie == 'Star Wars' and 4 <= number_tickets:
    price_per_person *= 0.7
if movie == 'Jumanji' and 2 == number_tickets:
    price_per_person *= 0.85

total_cost = number_tickets * price_per_person
print(f"Your bill is {total_cost:.2f} leva.")
