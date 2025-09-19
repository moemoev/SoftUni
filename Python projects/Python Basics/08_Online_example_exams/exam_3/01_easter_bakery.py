price_kilo_flour = float(input())
kilo_flour = float(input())
kilo_sugar = float(input())
number_eggs = int(input())
packages_maya = int(input())

price_kilo_sugar = price_kilo_flour * 0.75
price_eggs = price_kilo_flour * 1.1
price_package_maya = price_kilo_sugar * 0.2

total_cost = kilo_flour * price_kilo_flour + kilo_sugar * price_kilo_sugar + number_eggs * price_eggs + \
             packages_maya * price_package_maya
print(f"{total_cost:.2f}")
