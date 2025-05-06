movie = str(input())  # todo, komm kla man, command movie doesnt work,
tickets_all_movies = 0
all_student_tickets = 0
all_standard_tickets = 0
all_kids_tickets = 0


while movie != 'Finish':
    number_tickets = int(input())
    command = str(input())
    counter = 0
    number_students = 0
    number_standards = 0
    number_kids = 0
    total_tickets_sold = 0
    while command != 'End' and counter < number_tickets:
        if command == 'student':
            number_students += 1
        elif command == 'standard':
            number_standards += 1
        else:
            number_kids += 1

        counter += 1
        if counter == number_tickets:
            continue
        command = str(input())
        if command == 'Finish':
            break
    total_tickets_sold = number_students + number_standards + number_kids
    tickets_all_movies += total_tickets_sold
    all_student_tickets += number_students
    all_standard_tickets += number_standards
    all_kids_tickets += number_kids
    print(f"{movie} - {total_tickets_sold / number_tickets * 100:.2f}% full.")
    if command == 'Finish':
        movie = 'Finish'
        continue
    movie = str(input())

print(f"Total tickets: {tickets_all_movies}")
print(f"{all_student_tickets / tickets_all_movies * 100:.2f}% student tickets.")
print(f"{all_standard_tickets / tickets_all_movies * 100:.2f}% standard tickets.")
print(f"{all_kids_tickets / tickets_all_movies * 100:.2f}% kids tickets.")
