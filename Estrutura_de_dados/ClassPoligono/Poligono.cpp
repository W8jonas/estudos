#include "Poligono.h"
#include <math.h>


Poligono::Poligono(int _numLados, float _tamanhoLado)
{
    setNumLados(_numLados);
    setTamanhoLado(_tamanhoLado);
}

Poligono::~Poligono() {}

void Poligono::setNumLados(int _numLados) {
    if (_numLados > 3) {
        numLados = _numLados;
    } else {
        numLados = 3;
    }
}

void Poligono::setTamanhoLado(float _tamanhoLado) {
    if (_tamanhoLado > 0) {
        tamanhoLado = _tamanhoLado;
    } else {
        tamanhoLado = 1;
    }
}

float Poligono::getArea(){
    return numLados*pow(tamanhoLado, 2) / (4 * tan(3.1416/numLados));
}

float Poligono::getPerimetro() {
    return numLados*tamanhoLado;
}
