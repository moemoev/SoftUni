import math

numbers_customers = int(input())
price_entrance = float(input())
price_sun_lounger = float(input())
price_umbrella = float(input())

number_sun_loungers = math.ceil(numbers_customers * 0.75)
number_umbrellas = math.ceil(numbers_customers / 2)

total_cost = (numbers_customers * price_entrance + number_umbrellas *
              price_umbrella + number_sun_loungers * price_sun_lounger)
print(f"{total_cost:.2f} lv.")
