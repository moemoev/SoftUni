numbers_days = int(input())
number_docs = 7
treated_patients = 0
untreated_patients = 0

for day in range(1, numbers_days + 1):
    number_patients = int(input())
    if day % 3 == 0:
        if treated_patients < untreated_patients:
            number_docs += 1
    if number_docs < number_patients:
        treated_patients += number_docs
        untreated_patients += (number_patients - number_docs)
    else:
        treated_patients += number_patients

print(f"Treated patients: {treated_patients}.")
print(f"Untreated patients: {untreated_patients}.")
