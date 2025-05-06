houses = [int(el) for el in input().split("@")]
cmd = input().split()
index = 0
cupid_was_successful = False
missing_houses = 0


def has_had_vday(neighborhood: list, index_house: int):
    if not houses[index_house] == 0:
        return False
    return True


def cupid_visits_house(neighborhood: list, index_house: int):
    houses[index_house] -= 2
    if houses[index_house] == 0:
        print(f"Place {index_house} has Valentine's day.")
        houses[index_house] = 0
    return


def cupid_successful(neighborhood: list, success: bool):
    if neighborhood.count(0) == len(neighborhood):
        success = True
        left_houses = 0
        return success, left_houses
    else:
        left_houses = len(neighborhood) - neighborhood.count(0)
        return success, left_houses


while not cmd[0] == 'Love!':
    jump = int(cmd[1])
    index += jump
    if len(houses) <= index:
        index = 0
    if has_had_vday(houses, index):
        print(f"Place {index} already had Valentine's day.")
    else:
        cupid_visits_house(houses, index)
    cmd = input().split()

cupid_was_successful, missing_houses = cupid_successful(houses, cupid_was_successful)

print(f"Cupid's last position was {index}.")
if cupid_was_successful:
    print(f"Mission was successful.")
else:
    print(f"Cupid has failed {missing_houses} places.")


'''
TASK:
You will receive a string with even integers, separated by a "@" - this is our neighborhood. After that, a series of J
ump commands will follow until you receive "Love!". Every house in the neighborhood needs a certain number of hearts 
delivered by Cupid so it can celebrate Valentine's day. The integers in the neighborhood indicate those needed hearts.
Cupid starts at the position of the first house (index 0) and must jump by a given length. The jump commands will be in 
this format: "Jump {length}". 
Every time he jumps from one house to another, the needed hearts for the visited house are decreased by 2: 
If the needed hearts for a certain house become equal to 0, print on the console "Place {house_index} has Valentine's day." 
If Cupid jumps to a house where the needed hearts are already 0, print on the console "Place {house_index} already had 
Valentine's day."
Keep in mind that Cupid can have a larger jump length than the size of the neighborhood, and if he does jump outside of 
it, he should start from the first house again (index 0).
For example, we are given this neighborhood: 6@6@6. Cupid is at the start and jumps with a length of 2. He will end up 
at index 2 and decrease the needed hearts by 2: [6, 6, 4]. Next, he jumps again with a length of 2 and goes outside the 
neighborhood, so he goes back to the first house (index 0) and again decreases the needed hearts there: [4, 6, 4].
Input
On the first line, you will receive a string with even integers separated by "@" – the neighborhood and the number of 
hearts for each house.
On the next lines, until "Love!" is received, you will be getting jump commands in this format: "Jump {length}".
Output
In the end, print Cupid's last position and whether his mission was successful or not:
"Cupid's last position was {last_position_index}."
If each house has had Valentine's day, print: 
"Mission was successful."
If not, print the count of all houses that didn't celebrate Valentine's Day:
"Cupid has failed {houseCount} places."
'''