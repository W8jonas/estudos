class Salary:
    
    def __init__(self, monthsInTheCompany, postInCompany):
        self.minimum_wage = 1000
        self.actual_salary = 0
        self.monthsInTheCompany = monthsInTheCompany
        self.postInCompany = postInCompany

    def calculate(self):
        developer_bonus = 400
        analyst_bonus = 600
        manager_bonus = 1000

        if (self.postInCompany == "programador"):
            self.actual_salary = self.minimum_wage * self.monthsInTheCompany + developer_bonus
        elif (self.postInCompany == "analista"):
            self.actual_salary = self.minimum_wage * self.monthsInTheCompany + analyst_bonus
        elif (self.postInCompany == "gerente"):
            self.actual_salary = self.minimum_wage * self.monthsInTheCompany + manager_bonus
        else:
            self.actual_salary = self.minimum_wage * self.monthsInTheCompany
    
    def get(self):
        return self.actual_salary


