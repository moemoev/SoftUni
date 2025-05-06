city = str(input())

while city != 'End':
    budget = float(input())
    total_savings = 0
    while total_savings < budget:
        total_savings += float(input())
    print(f"Going to {city}!")
    city = str(input())

