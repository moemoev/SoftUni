height_to_achieve = int(input())
starting_height = height_to_achieve - 30
number_jumps = 0
attempts = 0

mark_not_reached = True

while mark_not_reached and attempts != 3:
    jumped_height = int(input())
    number_jumps += 1
    if jumped_height > starting_height >= height_to_achieve:
        mark_not_reached = False
    elif jumped_height > starting_height:
        attempts = 0
        starting_height += 5
    else:
        attempts += 1

if not mark_not_reached:
    print(f"Tihomir succeeded, he jumped over {height_to_achieve}cm after {number_jumps} jumps.")
else:
    print(f"Tihomir failed at {starting_height}cm after {number_jumps} jumps.")
