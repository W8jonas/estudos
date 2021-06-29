#include "MatrizTriangular.h"
#include <math.h>
#include <string.h>
#include <iostream>


using namespace std;

MatrizTriangular::MatrizTriangular(int _dimensions, char* _type) {

    length = _dimensions + _dimensions * (_dimensions + 1) / 2;

    vet = new float [length];
    dimensions = _dimensions;
    type = _type;
}

MatrizTriangular::~MatrizTriangular() {
    delete [] vet;
}


int MatrizTriangular::getIndex(int _line, int _column) {

    if (_line >= 0 && _line < dimensions && _column >= 0 && _column < dimensions) {

        if ( strcmp(type, "upper") == 0 ) {
            if (_line <= _column) {
                return _line * (_line + 1) / 2 + _column;
            } else {
                return -2;
            }
        }
    
        if ( strcmp(type, "lower") == 0) {
            if (_line == 0) {
                return _line;
            }
            if (_line >= _column) {
                return _line * (_line + 1) / 2 + _column;
            } else {
                return -2;
            }
        }

        return -1;
    }

    return -1;
}

void MatrizTriangular::set(int _line, int _column, float valor) {
    int index = getIndex(_line, _column);
    if (index >= 0) {
        vet[index] = valor;
    }
}

float MatrizTriangular::get(int _line, int _column) {
    int index = getIndex(_line, _column);
    if (index < 0) {
        return 0;
    }
    return vet[index];
}

MatrizTriangular* MatrizTriangular::getTransposed(){

    MatrizTriangular *transp = new MatrizTriangular(dimensions, type);

    for(int i = 0; i < dimensions; i++) {
        for(int j = 0; j < dimensions; j++) {
            float val1 = get(i, j);
            transp->set(j, i, val1);            
        }
    }

    return transp;
}
