limit_x = int(input())
limit_y = int(input())
max_number_passwords = int(input())
password_counter = 0
A = '#'
B = '@'

for x in range(1, limit_x + 1):
    for y in range(1, limit_y + 1):
        if password_counter == max_number_passwords:
            break
        if 55 < ord(A):
            A = '#'
        if 96 < ord(B):
            B = '@'
        print(f"{A}{B}{x}{y}{B}{A}", end="|")
        password_counter += 1
        A = chr(ord(A) + 1)  # try += '1', does not work, cuz it changes A into a string!!
        B = chr(ord(B) + 1)
    if password_counter == max_number_passwords:
        break
