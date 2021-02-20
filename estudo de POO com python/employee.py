
from salary import Salary

class Employee:

    def __init__(self, name, age, monthsInTheCompany, postInCompany):
        self.name = name
        self.age = age
        self.monthsInTheCompany = monthsInTheCompany
        self.postInCompany = postInCompany
        self.salary = Salary(monthsInTheCompany, postInCompany)

    def show_name(self):
        print(self.name)

    def show_name_and_age(self):
        print(self.name, self.age)
