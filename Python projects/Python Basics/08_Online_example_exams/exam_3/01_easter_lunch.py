number_kosunak = int(input())
number_eggs = int(input())
kilo_kurabi = int(input())

price_kosunak = 3.2
price_egg = 4.35
price_kurabi = 5.4
price_egg_paint = 0.15

total_cost = number_kosunak * price_kosunak + kilo_kurabi * price_kurabi + number_eggs * price_egg + number_eggs \
             * price_egg_paint * 12
print(f"{total_cost:.2f}")
