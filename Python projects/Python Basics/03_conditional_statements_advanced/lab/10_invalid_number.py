number = int(input())
number_is_valid = False

if 100 <= number <= 200 or number == 0:
    number_is_valid = True

if not number_is_valid:
    print("invalid")
