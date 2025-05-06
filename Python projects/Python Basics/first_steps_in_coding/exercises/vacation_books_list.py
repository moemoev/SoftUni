
total_pages = int(input())
hourly_pages = int(input())
days = int(input())
hours = total_pages/hourly_pages
daily_hours = (hours/days)
print(daily_hours)

# judge seems to be updated and needs rounded numbers, so import floor from math and floor(dailys_hours)
# does yield the correct points

