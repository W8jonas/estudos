/*
    Autor: Jonas Henrique
    Data: 04/06/2021

    Criando Matriz MxN utilizando ponteiros
    
    Enunciado do exercício 23:

    Crie uma função que aloque dinamicamente uma matriz de tamanho m x n de valores 
    do tipo float e inicialize todos os seus elementos com o valor 0. Essa função 
    deve obedecer ao seguinte protótipo:

        float** alocaMatrizF(int m, int n);
 */

#include <iostream>

using namespace std;

float** alocaMatrizF(int columnCount, int lineCount){
    float **column = new float *[columnCount];
    float *line = new float [lineCount];

    for (int i = 0; i < lineCount; i++) {
        *(column + i) = line;
    }

    for (int i = 0; i < lineCount; i++) {
        for (int j = 0; j < columnCount; j++) {
            *(*(column + i) + j) = 0;
        }
    }

    return column;
}

int main() {

    int lineCount, columnCount;
    cout << "Digite o a quantidade de linhas: " << endl;
    cin >> lineCount;

    cout << "Digite o a quantidade de colunas: " << endl;
    cin >> columnCount;

    float **matriz = alocaMatrizF(columnCount, lineCount);

    for (int i = 0; i < lineCount; i++) {
        for (int j = 0; j < columnCount; j++) {
             cout << *(*(matriz + i) + j) << ", ";
        }
        cout << endl;
    }

    for(int i = 0; i < lineCount; ++i) {
        delete [] matriz[i];
    }
    delete [] matriz;

    return 0;
}


