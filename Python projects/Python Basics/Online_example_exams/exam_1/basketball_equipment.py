yearly_pay = int(input())

shoes = yearly_pay * 0.6
dress = shoes * 0.8
ball = dress * 0.25
accessories = ball * 0.2

total_yearly_cost = yearly_pay + shoes + dress + ball + accessories
print(f"{total_yearly_cost:.2f}")
