letters = str(input())
c_used = False
o_used = False
n_used = False
mark_for_space = False
word = ''
final_message = ''

while letters != 'End':
    if letters == 'c':
        if not c_used and (n_used and o_used):
            final_message += word + ' '
            word = ''
            c_used = False
            o_used = False
            n_used = False
        elif c_used:
            word += 'c'
        else:
            c_used = True
    elif letters == 'o':
        if not o_used and (n_used and c_used):
            final_message += word + ' '
            word = ''
            c_used = False
            o_used = False
            n_used = False
        elif o_used:
            word += 'o'
        else:
            o_used = True
    elif letters == 'n':
        if not n_used and (c_used and o_used):
            final_message += word + ' '
            word = ''
            c_used = False
            o_used = False
            n_used = False
        elif n_used:
            word += 'n'
        else:
            n_used = True

    if letters != 'c' and letters != 'o' and letters != 'n' and letters.isalpha():
        word += letters

    letters = input()

print(f"{final_message}")
