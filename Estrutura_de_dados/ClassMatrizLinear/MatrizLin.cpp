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

}

float MatrizLin::get(int _line, int _column) {

}

int MatrizLin::getIndex(int _line, int _column){

    if (_line >= 0 && _line < numLine && _column >= 0 && _column < numColumn) {
        return numColumn * _line + _column;
    }

    return -1;
}
