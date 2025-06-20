def recursive_power(number, power):
    if power == 1:
        return number
    return recursive_power(number, power - 1) * number


print(recursive_power(10, 100))


'''
TASK:
Create a recursive function called recursive_power() which should receive a number and a power. Using recursion, return 
the result of number ** power. Submit only the function in the judge system.
'''