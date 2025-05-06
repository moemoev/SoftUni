season = str(input())
gender_students = str(input())
number_students = int(input())
nights_to_stay = int(input())
price_per_night = 0.0
sport_type = ''
discount = 1.0

if season == 'Winter':
    price_per_night = 9.6
    if gender_students == 'mixed':
        price_per_night = 10
        sport_type = 'Ski'
    elif gender_students == 'boys':
        sport_type = 'Judo'
    else:
        sport_type = 'Gymnastics'

elif season == 'Spring':
    price_per_night = 7.2
    if gender_students == 'mixed':
        price_per_night = 9.5
        sport_type = 'Cycling'
    elif gender_students == 'boys':
        sport_type = 'Tennis'
    else:
        sport_type = 'Athletics'

else:
    price_per_night = 15
    if gender_students == 'mixed':
        price_per_night = 20
        sport_type = 'Swimming'
    elif gender_students == 'boys':
        sport_type = 'Football'
    else:
        sport_type = 'Volleyball'

if 10 <= number_students < 20:
    discount = 0.95
elif 20 <= number_students < 50:
    discount = 0.85
elif 50 <= number_students:
    discount = 0.5

total_price = nights_to_stay * number_students * price_per_night * discount
print(f"{sport_type} {total_price:.2f} lv.")
