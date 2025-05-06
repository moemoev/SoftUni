import math

record_in_seconds = float(input())
distance_in_meters = float(input())
climbingspeed_in_sec_per_m = float(input())
latency_every_50m_30s = distance_in_meters // 50
time_attempt = climbingspeed_in_sec_per_m * distance_in_meters + latency_every_50m_30s * 30

if time_attempt < record_in_seconds:
    print(f"Yes! The new record is {time_attempt:.2f} seconds.")
else:
    print(f"No! He was {(time_attempt - record_in_seconds):.2f} seconds slower.")
