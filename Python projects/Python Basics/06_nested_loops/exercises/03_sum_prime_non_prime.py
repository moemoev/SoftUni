command = str(input())
sum_prime_number = 0
sum_non_prime_number = 0
is_prime = False

while command != 'stop':
    number = int(command)
    if number < 0:
        print(f"Number is negative.")
        command = str(input())
        continue
    elif 0 <= number <= 2:
        is_prime = True
    else:
        for numbers in range(2, number):
            if number % numbers == 0:
                is_prime = False
                break
            else:
                is_prime = True
    if is_prime:
        sum_prime_number += number
    else:
        sum_non_prime_number += number
    command = str(input())

print(f"Sum of all prime numbers is: {sum_prime_number}")
print(f"Sum of all non prime numbers is: {sum_non_prime_number}")
