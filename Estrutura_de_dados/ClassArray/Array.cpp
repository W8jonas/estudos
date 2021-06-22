#include "Array.h"
#include <math.h>

Array::Array(int tam) {
    int n = tam < 0 ? 0 : tam;

    vet = new float [n];

    for (int i = 0; i < n; i++) {
        vet[i] = 0.0;
    }
    
}

Array::~Array() {
    delete [] vet;
}

void Array::set(int indice, float valor) {
    if (verifica(indice)) {
        vet[indice] = valor;
    }
}

float Array::get(int indice) {
    if (verifica(indice)) {
        return vet[indice];
    }
    return -1;
}

bool Array::verifica(int indice){
    if (indice >= 0 && indice < n) {
        return true;
    }
    return false;
}
