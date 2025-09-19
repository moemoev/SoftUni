exponent = int(input())

for number in range(0, exponent + 1, 2):
    print(2 ** number)

# for number in range(0, exponent + 1, 2):         alternate using pow(), which is built in
#     print(pow(2,number))
