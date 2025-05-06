first_time = int(input())
second_time = int(input())
third_time = int(input())
sum_sec = first_time + second_time + third_time
total_min = sum_sec // 60
total_sec = sum_sec % 60
if total_sec < 10:
    print(f"{total_min}:0{total_sec}")
else:
    print(f"{total_min}:{total_sec}")

# the ex.doc advises to use math.floor after the use of the // operator but i dont see the sense
# all the points are given by judge anyway, so ...
