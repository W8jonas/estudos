class Salary:
    minimum_wage = 1000
    
    def __init__(self, monthsInTheCompany, postInCompany):
        self.actual_salary = 0
        self.monthsInTheCompany = monthsInTheCompany
        self.postInCompany = postInCompany

    def __calculate_salary(self):
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
    
    def calculate(self):
        self.__calculate_salary()

