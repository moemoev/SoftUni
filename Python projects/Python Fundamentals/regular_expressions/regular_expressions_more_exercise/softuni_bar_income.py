import re

pattern_customer = r""
pattern_product = r""
pattern_quantity = r""
pattern_price = r""

recipient = input()

while not recipient == 'end of shift':

    recipient = input()


'''
TASK:
Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you 
are the person who has to draw the line and calculate the money from the products that were sold throughout the day. 
Until you receive a line with text "end of shift" you will be given lines of input. But before processing that line you 
should do some validations first.
Each valid order should have a customer, product, count and a price:
Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
Valid product contains any word character (not only letters) and must be surrounded by '<' and '>' 
Valid count is an integer, surrounded by '|'
Valid price is any real number followed by '$'
The parts of a valid order should appear in the order given: customer, product, count and a price.
Between each part there can be other symbols, except ('|', '$', '%' and '.')
For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following 
format: "Total income: {income}".
'''