city = str(input())
type_package = str(input())
vip = str(input())
number_sleepover = int(input())
price_per_sleepover = 0.0
invalid_input = False
if city == 'Bansko' or city == 'Borovets':
    if type_package == 'noEquipment':
        price_per_sleepover = 80
        if vip == 'yes':
            price_per_sleepover *= 0.95
    elif type_package == 'withEquipment':
        price_per_sleepover = 100
        if vip == 'yes':
            price_per_sleepover *= 0.9
    else:
        invalid_input = True
elif city == 'Varna' or city == 'Burgas':
    if type_package == 'noBreakfast':
        price_per_sleepover = 100
        if vip == 'yes':
            price_per_sleepover *= 0.93
    elif type_package == 'withBreakfast':
        price_per_sleepover = 130
        if vip == 'yes':
            price_per_sleepover *= 0.88
    else:
        invalid_input = True
else:
    invalid_input = True
if 7 < number_sleepover:
    number_sleepover -= 1
total_cost = number_sleepover * price_per_sleepover
if number_sleepover < 1:
    print(f"Days must be positive number!")
elif invalid_input:
    print(f"Invalid input!")
if 1 < number_sleepover and not invalid_input:
    print(f"The price is {total_cost:.2f}lv! Have a nice time!")
