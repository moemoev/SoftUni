start_interval = int(input())
end_interval = int(input())
# conversion into 2 2-digit numbers
lower_limit = start_interval * 10 + start_interval
upper_limit = end_interval * 10 + end_interval

for first_half in range(lower_limit, upper_limit + 1):
    for second_half in range(lower_limit, upper_limit + 1):
        # seperate the 2 digit_numbers that iterate through the loop into single digits to perform checks and
        #  fullfill the requirements
        if ((first_half // 10) % 2 == 0 and (second_half % 10) % 2 == 0) or \
                ((first_half // 10) % 2 == 1 and (second_half % 10) % 2 == 1):
            continue
        elif first_half // 10 <= second_half % 10:
            continue
        elif (first_half % 10 + second_half // 10) % 2 != 0:
            continue
        if (first_half % 10) < start_interval or (first_half % 10) > end_interval:
            continue
        if (second_half % 10) < start_interval or (second_half % 10) > end_interval:
            continue
        print(f"{first_half}{second_half}", end=" ")
