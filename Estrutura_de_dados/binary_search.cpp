#include <iostream>
using namespace std;

bool buscaBinaria(int vet[], int n, int chave){
    if(vet[n] == chave) return true; 
    
    int meioDoArray = (int) (0.5 + (float) n / 2); // encontra meio do vetor e arredonda para cima

    if (n == meioDoArray) {
        meioDoArray = meioDoArray - 1;
    }

    if (n == 0) return false; 

    if (vet[meioDoArray] >= chave) {
        return buscaBinaria(vet, meioDoArray, chave);
    } else {
        return buscaBinaria(vet + meioDoArray, meioDoArray, chave);
    }
}

int main() {
    int array[10] = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18};
    int valorParaBuscar = 14;

    bool resposta = buscaBinaria(array, 9, valorParaBuscar);
    
    cout << "O resultado eh: " << resposta << endl;
    return 0;
}
