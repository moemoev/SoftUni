stadium_capacity = int(input())
number_fans = int(input())
fans_block_a = 0
fans_block_b = 0
fans_block_v = 0
fans_block_g = 0

for fan in range(number_fans):
    block = str(input())
    if block == 'A':
        fans_block_a += 1
    elif block == 'B':
        fans_block_b += 1
    elif block == 'V':
        fans_block_v += 1
    elif block == 'G':
        fans_block_g += 1

print(f"{(fans_block_a / number_fans * 100):.2f}%")
print(f"{(fans_block_b / number_fans * 100):.2f}%")
print(f"{(fans_block_v / number_fans * 100):.2f}%")
print(f"{(fans_block_g / number_fans * 100):.2f}%")
print(f"{(number_fans / stadium_capacity * 100):.2f}%")
