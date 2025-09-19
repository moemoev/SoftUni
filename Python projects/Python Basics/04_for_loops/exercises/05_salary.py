opened_tabs = int(input())
salary = int(input())

for n in range(opened_tabs):
    tab = str(input())
    if tab == 'Facebook':
        salary -= 150
    elif tab == 'Instagram':
        salary -= 100
    elif tab == 'Reddit':
        salary -= 50

    if salary <= 0:
        print("You have lost your salary.")
        break
if salary > 0:
    print(f"{salary}")
