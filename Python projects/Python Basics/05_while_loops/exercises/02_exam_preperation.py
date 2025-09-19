max_fails = int(input())
exercise = ''
last_exercise = ''
failed_attempts = 0
sum_grades = 0.0
number_of_exercises = 0
learned_enough = False

while failed_attempts < max_fails:
    exercise = str(input())
    if exercise == 'Enough':
        learned_enough = True
        break
    last_exercise = exercise
    number_of_exercises += 1
    grade = int(input())
    sum_grades += grade
    if grade <= 4:
        failed_attempts += 1


if learned_enough:
    print(f'Average score: {(sum_grades / number_of_exercises):.2f}\nNumber of problems: {number_of_exercises}'
          f'\nLast problem: {last_exercise}')
else:
    print(f'You need a break, {failed_attempts} poor grades.')
