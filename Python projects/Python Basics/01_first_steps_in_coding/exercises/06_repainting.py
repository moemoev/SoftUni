nylon = 1.50 * int(input())
paint = 14.50 * int(input())
thinner = 5.00 * int(input())
bags = 0.40
material = nylon + 3.00 + paint + paint/10 + thinner + bags
hours = material * 0.30 * int(input())
cost = hours * material
print(cost)
