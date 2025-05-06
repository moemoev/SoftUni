holidays = int(input())  # all playtime are in minutes
days_per_year = 365
playtime_on_workdays = 63
playtime_on_holidays = 127
yearly_playtime_minutes = 30000
playtime_current_year = holidays * playtime_on_holidays + (days_per_year - holidays) * playtime_on_workdays

if yearly_playtime_minutes < playtime_current_year:
    diff_time = playtime_current_year - yearly_playtime_minutes
    hours = diff_time // 60
    minutes = diff_time % 60
    print(f"Tom will run away\n{hours} hours and {minutes} minutes more for play")
else:
    diff_time = yearly_playtime_minutes - playtime_current_year
    hours = diff_time // 60
    minutes = diff_time % 60
    print(f"Tom sleeps well\n{hours} hours and {minutes} minutes less for play")
