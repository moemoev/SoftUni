record = float(input())
distance = float(input())
seconds_per_meter = float(input())
delay = (distance // 15) * 12.5
time = distance * seconds_per_meter + delay
if time < record:
    print(f"Yes, he succeeded! The new world record is {time:.2f} seconds.")
else:
    print(f"No, he failed! He was {time - record:.2f} seconds slower.")
