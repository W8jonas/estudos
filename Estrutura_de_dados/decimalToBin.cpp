#include <iostream>
#include <string.h>
#include <math.h>

using namespace std;

int inteiroParaBinario(int *vetor, int numeroDecimal){

    if (numeroDecimal == 0) {
        return -1;
    } else {
        int resto = numeroDecimal % 2;
        int posicaoDoArray = 1 + inteiroParaBinario(vetor, numeroDecimal/2);
        *(vetor + posicaoDoArray) = resto;
        return posicaoDoArray;
    }
}

int main() {
    int *numeroEmBinario = new int [14];
    int numeroDecimal = 14;

    int resposta = inteiroParaBinario(numeroEmBinario, numeroDecimal, 0);

    cout << "O resultado eh: " << resposta << endl;

    for (int i = 0; i < 6; i++) {
        cout << numeroEmBinario[i] << ", ";
    }

    return 0;
}
