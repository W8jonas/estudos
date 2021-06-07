#include <iostream>
#include <string.h>
#include <math.h>

using namespace std;

int strToInt(char *vetor, int posicao){
    int x = vetor[posicao - 1] - 48;

    if (posicao == 1) {
        char valorString = (*vetor) - 48;
        return valorString;
    } else {
        int valorInt = 10 * strToInt(vetor, posicao - 1) + x;
        return valorInt;
    }
}

int main() {
    int resposta = strToInt("1223", 4);

    cout << "O resultado eh: " << resposta << endl;
    return 0;
}
