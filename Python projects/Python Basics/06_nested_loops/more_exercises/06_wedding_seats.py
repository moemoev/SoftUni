last_sector = str(input())
first_sector_rows = int(input())
odd_row_seats = int(input())
number_total_seats = 0

for sector in range(65, ord(last_sector) + 1):
    rows_per_sector = first_sector_rows
    row = 1
    while row <= rows_per_sector:
        for seats in range(1, odd_row_seats + 3):
            if row % 2 == 1 and seats >= odd_row_seats + 1:
                continue
            print(f"{chr(sector)}{row}{chr(seats + 96)}")
            number_total_seats += 1
        row += 1
    first_sector_rows += 1
print(f"{number_total_seats}")
