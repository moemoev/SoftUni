username = str(input())
password = str(input())

input_data = str(input())
while input_data != password:
    input_data = str(input())
print(f'Welcome {username}!')