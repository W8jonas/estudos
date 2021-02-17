class Employee:
    minimum_wage = 1000

    def __init__(self, name, age, monthsInTheCompany, postInCompany):
        self.name = name
        self.age = age
        self.monthsInTheCompany = monthsInTheCompany
        self.postInCompany = postInCompany

    def show_name(self):
        print(self.name)

    def show_name_and_age(self):
        print(self.name, self.age)

    def calculate_salary(self):
        developer_bonus = 400
        analyst_bonus = 600
        manager_bonus = 1000

        if (self.postInCompany == "programador"):
            print(self.minimum_wage * self.monthsInTheCompany + developer_bonus)
        elif (self.postInCompany == "analista"):
            print(self.minimum_wage * self.monthsInTheCompany + analyst_bonus)
        elif (self.postInCompany == "gerente"):
            print(self.minimum_wage * self.monthsInTheCompany + manager_bonus)
        else:
            print(self.minimum_wage * self.monthsInTheCompany)


programmer = Employee("Jonas", 19, 3, "programador")
programmer.calculate_salary()

analyst = Employee("Pablo", 17, 3, "analista")
analyst.calculate_salary()

manager = Employee("Lucas", 20, 3, "gerente")
manager.calculate_salary()
