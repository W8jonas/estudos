#include "MatrizLin.h"
#include <math.h>

MatrizLin::MatrizLin(int _line, int _column) {
    length = _line * _column;

    vet = new float [length];
    numLine = _line;
    numColumn = _column;
}

MatrizLin::~MatrizLin() {
    delete [] vet;
}

void MatrizLin::set(int _line, int _column, float valor) {
    int index = getIndex(_line, _column);
    if (index != -1) {
        vet[index] = valor;
    }
}

float MatrizLin::get(int _line, int _column) {
    int index = getIndex(_line, _column);
    if (index != -1) {
        return vet[index];
    }
}

int MatrizLin::getIndex(int _line, int _column){

    if (_line >= 0 && _line < numLine && _column >= 0 && _column < numColumn) {
        return numColumn * _line + _column;
    }

    return -1;
}

bool MatrizLin::isSymmetrical(){

    for(int i = 0; i < numColumn; i++) {
        for(int j = 0; j < numLine; j++) {
            float val1 = get(i, j);
            float val2 = get(i, j);
            if (val1 != val2) return false;
        }
    }

    return true;
}

MatrizLin* MatrizLin::getTransposed(){

    MatrizLin *transp = new MatrizLin(numColumn, numLine);

    for(int i = 0; i < numColumn; i++) {
        for(int j = 0; j < numLine; j++) {
            float val1 = get(i, j);
            transp->set(j, i, val1);            
        }
    }

    return transp;
}
