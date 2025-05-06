'''
TASK:
Mighty battle is coming. In the stormy nether realms, demons are fighting against each other for supremacy in a duel
from which only one will survive.
Your job, however is not so exciting. You are assigned to sign in all the participants in the nether realm's mighty
battle's demon book, which of course is sorted alphabetically.
A demon's name contains his health and his damage.
The sum of the asci codes of all characters (excluding numbers (0-9), arithmetic symbols ('+', '-', '*', '/') and
delimiter dot ('.')) gives a demon's total health.
The sum of all numbers in his name forms his base damage. Note that you should consider the plus '+' and minus '-'
signs (e.g. +10 is 10 and -10 is -10). However, there are some symbols ('*' and '/') that can further alter the base
damage by multiplying or dividing it by 2 (e.g. in the name "m15*/c-5.0", the base damage is 15 + (-5.0) = 10 and then
you need to multiply it by 2 (e.g. 10 * 2 = 20) and then divide it by 2 (e.g. 20 / 2 = 10)).
So, multiplication and division are applied only after all numbers are included in the calculation and in the order
they appear in the name.
You will get all demons on a single line, separated by commas and zero or more blank spaces. Sort them in alphabetical
order and print their names along their health and damage.
Input
The input will be read from the console. The input consists of a single line containing all demon names separated by
commas and zero or more spaces in the format: "{demon name}, {demon name}, … {demon name}"
'''