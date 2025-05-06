import math

number_kosunaci = int(input())
package_flour = 750
package_sugar = 950
max_flour = 0
max_sugar = 0
total_flour = 0
total_sugar = 0

while 0 < number_kosunaci:
    sugar = int(input())
    flour = int(input())
    total_sugar += sugar
    total_flour += flour
    if max_sugar < sugar:
        max_sugar = sugar
    if max_flour < flour:
        max_flour = flour
    number_kosunaci -= 1
sugar_packages_needed = math.ceil(total_sugar / package_sugar)
flour_packages_needed = math.ceil(total_flour / package_flour)

print(f"Sugar: {sugar_packages_needed}")
print(f"Flour: {flour_packages_needed}")
print(f"Max used flour is {max_flour} grams, max used sugar is {max_sugar} grams.")
