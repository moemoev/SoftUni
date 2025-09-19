start = int(input())
end = int(input())


for number in range(start, end + 1):
    number_as_array = str(number)
    even_sum = 0
    odd_sum = 0
    for position in range(len(number_as_array)):
        if position % 2 == 0:
            even_sum += int(number_as_array[position]) % 10
        else:
            odd_sum += int(number_as_array[position]) % 10
    if even_sum == odd_sum:
        print(f"{number}", end=" ")
