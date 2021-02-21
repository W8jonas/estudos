
from salary import Salary

class Employee:

    def __init__(self, name, age, monthsInTheCompany, postInCompany):
        self.name = name
        self.age = age
        self.monthsInTheCompany = monthsInTheCompany
        self.postInCompany = postInCompany
        self.__salary = Salary(monthsInTheCompany, postInCompany)

    def show_name(self):
        print(self.name)

    def show_name_and_age(self):
        print(self.name, self.age)

    def calculate_salary(self):
        self.__salary.calculate()

    @property
    def get_salary(self):
        return self.__salary.get()