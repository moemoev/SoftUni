fruit = str(input())
size = str(input())
number_orders = int(input())
total_cost = 0.0

if size == 'small':
    if fruit == 'Watermelon':
        price = 56.0 * 2
    elif fruit == 'Mango':
        price = 36.66 * 2
    elif fruit == 'Pineapple':
        price = 42.1 * 2
    elif fruit == 'Raspberry':
        price = 20.0 * 2
elif size == 'big':
    if fruit == 'Watermelon':
        price = 28.7 * 5
    elif fruit == 'Mango':
        price = 19.6 * 5
    elif fruit == 'Pineapple':
        price = 24.8 * 5
    elif fruit == 'Raspberry':
        price = 15.2 * 5

total_cost = number_orders * price

if 400 <= total_cost <= 1000:  # might be an issue with judge cuz MIND THE BORDERS!!!!
    total_cost *= 0.85
elif 1000 < total_cost:
    total_cost *= 0.5

print(f"{total_cost:.2f} lv.")
