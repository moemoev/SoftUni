searched_book = str(input())
current_book = str(input())
number_searches = 0
book_not_here = False

while current_book != searched_book:
    if current_book == 'No More Books':
        book_not_here = True
        break
    number_searches += 1
    current_book = str(input())

if book_not_here:
    print(f"The book you search is not here!\nYou checked {number_searches} books.")
else:
    print(f"You checked {number_searches} books and found it.")
