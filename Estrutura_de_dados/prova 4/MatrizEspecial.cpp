#include "MatrizEspecial.h"
#include <math.h>
#include <iostream>
using namespace std;

MatrizEspecial::MatrizEspecial(int _line, int _column) {

    if (_line < 3 || _column < 1) {
        cout << "Dimensoes invalidas" << endl;
        exit(0);
    }

    vet = new float [_column];
    numLine = _line;
    numColumn = _column;
}

MatrizEspecial::~MatrizEspecial() {
    delete [] vet;
}

int MatrizEspecial::detInd(int _line, int _column){

    // _line e _column são válidos?
    if (_line >= 0 && _line < numLine && _column >= 0 && _column < numColumn) {

        // return numColumn * _line + _column;

        if (_line == 0) { // estou na primeira linha
            return _column;
        } else {
            if ( ((_line + 1) / 2 - _line) % 2 == 0 ) {     // 4/2
                return -4;
            } else {
                return -3;
            }
        }
        // 1, 3, 6, 10
        // 0, 2, 5, 9

        // _line + (_line - 1) * 2 
        // return _line + (_line - 1) * 2 + _column;

        // se for posição igual a zero, return -2;
        
    }

    return -1;
}

void MatrizEspecial::set(int _line, int _column, float valor) {
    int index = detInd(_line, _column);
    if (index >= 0) {
        vet[index] = valor;
    }

    if (index == -3) {
        vet[index] = 0;
    }

    if (index == -2 && valor != 0) {
        cout << "Tentando atribuir valor nao zero em posição impropria" << endl;
    }

    if (index == -1) {
        cout << "Indices invalidos" << endl;
    }
}

float MatrizEspecial::get(int _line, int _column) {
    int index = detInd(_line, _column);
    if (index >= 0) {
        // inverte o sinal quando preciso 
        if (_line % 2 == 0) {
            return vet[index];
        } else {
            return -1 * vet[index];
        }
    }

    if (index = -3) {
        return 0;
    }

    if (index = -4) {
        return -1 * vet[3];
    }

    cout << "Indices invalidos" << endl;
    exit(1);
}

bool MatrizEspecial::inverteSinal() {
    return 0;
}
