
class Funcionario:

    def __init__(self, nome):
        self.nome = nome

    def mostrar_nome(self):
        print(self.nome)


primeiro_funcionario = Funcionario("Jonas")
primeiro_funcionario.mostrar_nome()
