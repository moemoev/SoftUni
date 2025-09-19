day_of_the_week = str(input())
day_of_the_week_is_valid = False
workingday_is_valid = False
weekend_is_valid = False

if day_of_the_week == "Monday" \
    or day_of_the_week == "Tuesday" \
    or day_of_the_week == "Wednesday" \
    or day_of_the_week == "Thursday" \
    or day_of_the_week == "Friday":
    day_of_the_week_is_valid = True
    workingday_is_valid = True
elif day_of_the_week == "Saturday" or day_of_the_week == "Sunday":
    day_of_the_week_is_valid = True
    weekend_is_valid = True

if day_of_the_week_is_valid and workingday_is_valid:      #print conditional
    print("Working day")
elif day_of_the_week_is_valid and weekend_is_valid:
    print("Weekend")
else:
    print("Error")
