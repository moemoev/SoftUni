hours = 23
minutes = 59

for hour in range(hours + 1):
    for minute in range(minutes + 1):
        print(f"{hour}:{minute}")

# hour = 0                alternate with nested while loops
# minute = 0
# while hour < 23:
#     if minute == 60:
#         hour += 1
#         minute = 0
#     while minute < 60:
#         print(f"{hour}:{minute}")
#         minute += 1
