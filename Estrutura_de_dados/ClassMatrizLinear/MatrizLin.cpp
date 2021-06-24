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

void MatrizLin::set(int line, int column, float valor) {

}

float MatrizLin::get(int line, int column) {

}

bool MatrizLin::detInd(int indice){

}
