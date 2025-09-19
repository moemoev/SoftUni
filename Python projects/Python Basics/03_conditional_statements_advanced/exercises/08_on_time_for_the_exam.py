hours_exam = int(input())
minutes_exam = int(input())
hours_arrival = int(input())
minutes_arrival = int(input())
type_of_arrival = ''

time_difference = hours_exam * 60 + minutes_exam - (hours_arrival * 60 + minutes_arrival)

if time_difference < 0:
    type_of_arrival = 'Late'
elif 0 <= time_difference <= 30:
    type_of_arrival = 'On time'
else:
    type_of_arrival = 'Early'

if 0 < time_difference:
    print(f"{type_of_arrival}")
    hours = time_difference // 60
    minutes = time_difference % 60
    if 60 <= time_difference:
        print(f"{hours}:{minutes:02d} hours before the start")
    else:
        print(f"{time_difference} minutes before the start")

elif time_difference < 0:
    time_difference = abs(time_difference)
    print(f"{type_of_arrival}")
    hours = time_difference // 60
    minutes = time_difference % 60
    if 60 <= time_difference:
        print(f"{hours}:{minutes:02d} hours after the start")
    else:
        print(f"{minutes} minutes after the start")

else:
    print(f"{type_of_arrival}")
