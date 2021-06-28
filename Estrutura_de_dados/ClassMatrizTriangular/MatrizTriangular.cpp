#include "MatrizTriangular.h"
#include <math.h>
#include<string.h>
#include<iostream>


using namespace std;

MatrizTriangular::MatrizTriangular(int _dimensions, char* _type) {

    length = _dimensions * (_dimensions + 1) / 2;

    vet = new float [length];
    dimensions = _dimensions;
    type = _type;
}

MatrizTriangular::~MatrizTriangular() {
    delete [] vet;
}

void MatrizTriangular::set(int _line, int _column, float valor) {
    int index = getIndex(_line, _column);
    if (index != -1 && index != -2) {
        vet[index] = valor;
    }
}

float MatrizTriangular::get(int _line, int _column) {
    int index = getIndex(_line, _column);
    if (index != -2) {
        return 0;
    }
    if (index != -1) {
        return vet[index];
    }
}

int MatrizTriangular::getIndex(int _line, int _column){

    if (_line >= 0 && _line < dimensions && _column >= 0 && _column < dimensions) {

        if ( strcmpi(type, "upper") == 0 ) {
            if (_line <= _column) return -2;
                return _line * (_line + 1) / 2 + _column;
        }
    
        if ( strcmpi(type, "lower") == 0) {
            if (_line >= _column) return -2;
                return _line * (_line + 1) / 2 + _column;
        }

        return -1;
    }

    return -1;
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
