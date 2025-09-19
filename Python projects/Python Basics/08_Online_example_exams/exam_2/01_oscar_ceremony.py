rent_hall = int(input())

statues = rent_hall * 0.7
catering = statues * 0.85
dubbing = catering * 0.5

total_cost = rent_hall + statues + catering + dubbing
print(f"{total_cost:.2f}")
