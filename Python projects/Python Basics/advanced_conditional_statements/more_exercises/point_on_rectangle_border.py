x1 = float(input())
y1 = float(input())
x2 = float(input())
y2 = float(input())
x = float(input())
y = float(input())
is_on_border = False

if x == x1 or x == x2:
    if y1 <= y <= y2:
        is_on_border = True
elif y == y1 or y == y2:
    if x1 <= x <= x2:
        is_on_border = True

if is_on_border:
    print(f"Border")
else:
    print(f"Inside / Outside")
