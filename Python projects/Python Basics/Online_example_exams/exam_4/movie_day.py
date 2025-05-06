time_for_filming = int(input())
number_scenes = int(input())
time_each_scene = int(input())

total_time_needed = number_scenes * time_each_scene
time_for_filming *= 0.85

if total_time_needed < time_for_filming:
    print(f"You managed to finish the movie on time! You have {round(time_for_filming - total_time_needed)} minutes left!")
else:
    print(f"Time is up! To complete the movie you need {round(total_time_needed - time_for_filming)} minutes.")
