name = str(input())

sum_grades = 0.0
year = 1
failed_attempts = 0
failed = False

while year < 13:
    school_grade = float(input())
    if school_grade < 4.0 and failed_attempts == 1:
        failed = True
        break
    elif school_grade < 4.0:
        failed_attempts += 1
        continue
    sum_grades += school_grade
    year += 1

if failed:
    print(f"{name} has been excluded at {year} grade")
else:
    print(f"{name} graduated. Average grade: {(sum_grades / (year - 1)):.2f} ")
