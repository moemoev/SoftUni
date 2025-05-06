length = int(input())
width = int(input())
total_cake_parts = length * width
parts_taken = input()

while 0 < total_cake_parts and parts_taken != 'STOP':
    total_cake_parts -= int(parts_taken)
    if total_cake_parts < 0:
        continue
    parts_taken = input()

if parts_taken == 'STOP':
    print(f"{total_cake_parts} pieces are left.")
else:
    print(f"No more cake left! You need {abs(total_cake_parts)} pieces more.")
