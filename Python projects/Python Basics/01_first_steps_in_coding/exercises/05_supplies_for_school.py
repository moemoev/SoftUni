pens = 5.80 * int(input())
markers = 7.20 * int(input())
preparat = 1.20 * int(input())
reduction = int(input())
sum = pens+markers+preparat
print(sum - sum * reduction/100)

# works and result is 100/100 but looks bad, can be adjusted -> input range and output 2 dec after .
