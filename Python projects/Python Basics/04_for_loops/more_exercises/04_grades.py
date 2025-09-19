total_students = int(input())
top_students = 0
better_than_four = 0
better_than_three = 0
fail = 0
average = 0

for students in range(total_students):
    grade = float(input())
    average += grade
    if grade < 3:
        fail += 1
    elif grade < 4:
        better_than_three += 1
    elif grade < 5:
        better_than_four += 1
    else:
        top_students += 1

print(f"Top students: {(top_students / total_students * 100):.2f}%")
print(f"Between 4.00 and 4.99: {(better_than_four / total_students * 100):.2f}%")
print(f"Between 3.00 and 3.99: {(better_than_three / total_students * 100):.2f}%")
print(f"Fail: {(fail / total_students * 100):.2f}%")
print(f"Average: {(average / total_students):.2f}")
