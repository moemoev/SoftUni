budget = float(input())
season = str(input())

destination = ''
vacation_type = ''
spend_budget = 0.0

if budget <= 100:
    destination = 'Bulgaria'
    if season == 'summer':
        vacation_type = 'Camp'
        spend_budget = budget * 0.3
    else:
        vacation_type = 'Hotel'
        spend_budget = budget * 0.7
elif 100 < budget <= 1000:
    destination = 'Balkans'
    if season == 'summer':
        vacation_type = 'Camp'
        spend_budget = budget * 0.4
    else:
        vacation_type = 'Hotel'
        spend_budget = budget * 0.8

else:
    destination = 'Europe'
    vacation_type = 'Hotel'
    spend_budget = budget * 0.9

print(f"Somewhere in {destination}\n{vacation_type} - {spend_budget:.2f}")
