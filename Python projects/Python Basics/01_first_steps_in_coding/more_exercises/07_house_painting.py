height_house = float(input())  # height and width have the same measurements in this task
length_house = float(input())
height_roof = float(input())
area_door = 1.2 * 2
area_window = 1.5 ** 2
green_paint_area_per_l = 3.4
red_paint_area_per_l = 4.3

area_front_back_walls = 2 * height_house ** 2 - area_door
area_side_walls = 2 * (height_house * length_house - area_window)
area_roof_front_back_walls = 2 * height_roof * height_house / 2
area_roof_side_walls = 2 * height_house * length_house

green_area = area_front_back_walls + area_side_walls
red_area = area_roof_front_back_walls + area_roof_side_walls

quantity_green_paint_l = green_area / green_paint_area_per_l
quantity_red_paint_l = red_area / red_paint_area_per_l

print(f"{quantity_green_paint_l:.2f}")
print(f"{quantity_red_paint_l:.2f}")
