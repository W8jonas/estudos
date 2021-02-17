class Funcionario:
    salario_minimo = 1000

    def __init__(self, nome, idade, meses_na_empresa, cargo):
        self.nome = nome
        self.idade = idade
        self.meses_na_empresa = meses_na_empresa
        self.cargo = cargo

    def mostrar_nome(self):
        print(self.nome)

    def mostrar_nome_e_idade(self):
        print(self.nome, self.idade)

    def calcular_salario(self):
        bonificação_de_programador = 400
        bonificação_de_analista = 600
        bonificação_de_gerente = 1000

        if (self.cargo == "programador"):
            print(self.salario_minimo * self.meses_na_empresa + bonificação_de_programador)
        elif (self.cargo == "analista"):
            print(self.salario_minimo * self.meses_na_empresa + bonificação_de_analista)
        elif (self.cargo == "gerente"):
            print(self.salario_minimo * self.meses_na_empresa + bonificação_de_gerente)
        else:
            print(self.salario_minimo * self.meses_na_empresa)


primeiro_funcionario = Funcionario("Jonas", 19, 3, "programador")
primeiro_funcionario.calcular_salario()

segundo_funcionario = Funcionario("Pablo", 17, 3, "analista")
segundo_funcionario.calcular_salario()

terceiro_funcionario = Funcionario("Lucas", 20, 3, "gerente")
terceiro_funcionario.calcular_salario()
