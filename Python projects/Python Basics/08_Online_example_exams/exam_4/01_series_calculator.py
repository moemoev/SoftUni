import math
serial_name = str(input())
number_seasons = int(input())
number_episodes = int(input())
runtime_per_episode = float(input())
endtime_each_season = 10

total_runtime = (number_seasons * number_episodes * runtime_per_episode) * 1.2 + number_seasons * endtime_each_season
print(f"Total time needed to watch the {serial_name} series is {math.floor(total_runtime)} minutes.")
