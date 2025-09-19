start_interval = str(input())
end_interval = str(input())
forbidden_letter = str(input())
counter_combinations = 0

for first_letter in range(ord(start_interval), ord(end_interval) + 1):
    if first_letter == ord(forbidden_letter):
        continue
    for second_letter in range(ord(start_interval), ord(end_interval) + 1):
        if second_letter == ord(forbidden_letter):
            continue
        for third_letter in range(ord(start_interval), ord(end_interval) + 1):
            if third_letter == ord(forbidden_letter):
                continue
            counter_combinations += 1
            print(f"{chr(first_letter)}{chr(second_letter)}{chr(third_letter)}", end=" ")
print(f"{counter_combinations}")
