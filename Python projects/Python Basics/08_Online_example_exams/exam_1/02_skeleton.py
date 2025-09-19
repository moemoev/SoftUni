minutes = int(input())
seconds = int(input())
distance = float(input())
time_per_hundred_meters = int(input())

time_distance = distance / 100 * time_per_hundred_meters
time_slow_down = distance / 120 * 2.5
total_time = time_distance - time_slow_down
time_to_beat = minutes * 60 + seconds

if total_time > time_to_beat:
    print(f"No, Marin failed! He was {(total_time - time_to_beat):.3f} second slower.")
else:
    print(f"Marin Bangiev won an Olympic quota!")
    print(f"His time is {total_time:.3f}.")
