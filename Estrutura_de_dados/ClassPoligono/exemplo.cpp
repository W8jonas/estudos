#include <iostream>
#include "Poligono.cpp"

using namespace std;


int main() {
    int quantidadeDeLadosDoPoligono;
    int tamadoDosLadosDoPoligono;

    cout << "Digite a quantidade de lados do poligono: ";
    cin >> quantidadeDeLadosDoPoligono;

    cout << "Digite o tamado dos lados do poligono: ";
    cin >> tamadoDosLadosDoPoligono;

    Poligono poli(quantidadeDeLadosDoPoligono, tamadoDosLadosDoPoligono);

    cout << "Resultado da area do poligono: " << poli.getArea() << endl;
    cout << "Resultado do perimetro do poligono: " << poli.getPerimetro() << endl;

    // CIN para evitar que o terminal feche depois da execução do programa
    int garbage;
    cin >> garbage;
    return 0;
}
