#include <iostream>
#include "Opcao.cpp"

using namespace std;

int main() {
    char letra;
    int precoDaAcao;

    cout << "Digite uma letra para sua ação:" << endl;
    cin >> letra;

    cout << "Digite o preço da sua ação:" << endl;
    cin >> precoDaAcao;

    Opcao opcaoNaBolsa(letra, precoDaAcao);

    opcaoNaBolsa.imprime();

    return 0;
}
