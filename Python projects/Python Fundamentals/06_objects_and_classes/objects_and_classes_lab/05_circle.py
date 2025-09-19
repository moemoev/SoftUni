class Circle:
    __pi = 3.14

    def __init__(self, diameter):
        self.diameter = diameter

    def calculate_circumference(self):
        result = 2 * self.__pi * self.diameter / 2
        return result

    def calculate_area(self):
        result = self.__pi * (self.diameter / 2) ** 2
        return result

    def calculate_area_of_sector(self, angle):
        result = (angle / 360) * self.__pi * (self.diameter / 2) ** 2
        return result



'''
TASK:
Create a class Circle. In the __init__ method the circle should only receive one parameter - its diameter. Create a 
class attribute called __pi that is equal to 3.14. The class should also have the following methods:
calculate_circumference() - returns the circumference of the circle
calculate_area() - returns the area of the circle
calculate_area_of_sector(angle) - gives the central angle in degrees, returns the area that fills the sector
Notes: Search the formulas in the internet. Name your methods and variables exactly as in the description! Submit only 
the class. Test your class before submitting!
'''