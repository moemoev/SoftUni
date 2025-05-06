from math import pi
# from math import floor

radians = float(input())
degrees = radians * 180 / pi
print(floor(degrees))                          #judge will show errors since it expects non flOor output, which is ***
                                               #REVIEW 29.04.2025 to my younger self, ever heard of trunc or int casting
                                               # or even // int division?
                                               #fix your perspective and flow with the stream...