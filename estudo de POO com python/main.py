
from employee import Employee

programmer = Employee("Jonas", 19, 3, "programador")
programmer.calculate_salary()
print(programmer.get_salary)

analyst = Employee("Pablo", 17, 3, "analista")
analyst.calculate_salary()
print(analyst.get_salary)

manager = Employee("Lucas", 20, 3, "gerente")
manager.calculate_salary()
print(manager.get_salary)
