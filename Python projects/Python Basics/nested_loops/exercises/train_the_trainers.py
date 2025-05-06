number_judges = int(input())
name_presentation = str(input())
final_assessment = 0
number_presentations = 0
while name_presentation != 'Finish':
    sum_ratings = 0
    for rating in range(number_judges):
        sum_ratings += float(input())
    print(f"{name_presentation} - {sum_ratings / number_judges:.2f}.")
    final_assessment += sum_ratings / number_judges
    number_presentations += 1
    name_presentation = str(input())
print(f"Student's final assessment is {final_assessment/number_presentations:.2f}.")
