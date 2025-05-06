import math

command = str(input())
max_points = 0
winner_word = ''

while command != 'End of words':
    word = command
    points = 0
    for letter in word:
        points += ord(letter)
    if word[0] == 'A' or word[0] == 'E' or word[0] == 'I' or word[0] == 'O' or word[0] == 'U' or word[0] == 'Y' or \
            word[0] == 'a' or word[0] == 'e' or word[0] == 'i' or word[0] == 'o' or word[0] == 'u' or word[0] == 'y':
        points *= len(word)
    else:
        points = (points / len(word))  # no idea why this works in judge, task states something different...
    if max_points < points:
        max_points = points
        winner_word = word
    command = str(input())
print(f"The most powerful word is {winner_word} - {max_points}")
