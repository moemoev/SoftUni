country = str(input())
category = str(input())
total_points = 0.0
if country == 'Russia':
    if category == 'ribbon':
        total_points = 9.1 + 9.4
    elif category == 'hoop':
        total_points = 9.3 + 9.8
    else:
        total_points = 9.6 + 9.0
if country == 'Bulgaria':
    if category == 'ribbon':
        total_points = 9.600 + 9.400
    elif category == 'hoop':
        total_points = 9.55 + 9.75
    else:
        total_points = 9.5 + 9.4
if country == 'Italy':
    if category == 'ribbon':
        total_points = 9.2 + 9.5
    elif category == 'hoop':
        total_points = 9.45 + 9.35
    else:
        total_points = 9.7 + 9.15

print(f"The team of {country} get {total_points:.3f} on {category}.")
print(f"{(20 - total_points) * 5:.2f}%")
