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

    cout << "resultado do produto dos valores do vetor: " << poli.getArea() << endl;
    cout << "resultado do produto dos valores do vetor: " << poli.getPerimetro() << endl;

    return 0;
}
