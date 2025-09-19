start_left_interval = int(input())
start_right_interval = int(input())
end_left_interval = int(input()) + start_left_interval
end_right_interval = int(input()) + start_right_interval


for left_pair in range(start_left_interval, end_left_interval + 1):
    left_is_prime = True
    for is_prime in range(2, left_pair):
        if left_pair % is_prime == 0:
            left_is_prime = False
            break
    if not left_is_prime:
        continue
    for right_pair in range(start_right_interval, end_right_interval + 1):
        left_is_prime = True
        for is_prime in range(2, right_pair):
            if right_pair % is_prime == 0:
                left_is_prime = False
                break
        if not left_is_prime:
            continue
        else:
            print(f"{left_pair}{right_pair}")
