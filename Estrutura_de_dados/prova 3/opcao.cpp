#include <iostream>
#include "Opcao.h"

using namespace std;

Opcao::Opcao(char letra, int _preco) {
    nome = "PETR";
    letraTipo = letra;
    preco = _preco;

    // Caso preço seja negativo, ou preco tenha 2 dígitos, ou a letra não exista, crie com o valor padrão
    if (preco < 0 || preco > 99 || letraTipo < 'A' || letraTipo > 'X') { 
        letraTipo = 'A';
        preco = 10;
    }
}

Opcao::~Opcao() {
}

int Opcao::GetPreco() {
    return preco;
}

char* Opcao::GetTipo(){
    if (letraTipo <= 'L') {
        return "Opcao de compra";
    }
    return "Opcao de venda";
}

void Opcao::imprime() {
    char *tipo = GetTipo();
    cout << tipo << ": " << nome << letraTipo << preco << endl;
}
