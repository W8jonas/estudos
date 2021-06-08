/**
 * 
 * Enunciado
 * A) Crie uma função NÃO recursiva void imprime(int vet[], int n) que recebe 
 * como parâmetros um vetor de inteiros vet e seu tamanho n. Esta função deve 
 * realizar a impressão dos valores dos elementos do vetor.
 * 
 * B) Crie uma função recursiva int produto(int vet[], int n) que recebe como 
 * parâmetros um vetor de inteiros vet e seu tamanho n. A função deve retornar 
 * o produto dos elementos estritamente positivos do vetor. Considere que o 
 * vetor tem pelo menos um elemento > 0.
 * 
 * C) Faça um programa (função main) que crie e aloque dinamicamente um vetor 
 * de tamanho n, sendo n lido do teclado. Em seguida, faça a leitura dos elemen-
 * tos do vetor. Após isso, chame a função produto e imprima seu retorno, e 
 * depois utilize a função imprime para realizar a impressão dos elementos do
 *  vetor.
 */ 

#include <iostream>
#include <string.h>
#include <string>

using namespace std;

void imprime(int vet[], int n) {
    for (int i = 0; i < n; i++) {
        cout << vet[i] << ", ";
    }
}

int produto(int vet[], int n) {
    if (n == 0) {
        return vet[n] <= 0 ? 1 : vet[n];
    }
    return produto(vet, n - 1) * ( vet[n] <= 0 ? 1 : vet[n] );
}

int main() {
    int tamanhoDoVetor = 0;

    cout << "Digite o tamanho do vetor: ";
    cin >> tamanhoDoVetor;

    int *vetor = new int [tamanhoDoVetor];
    
    for (int i = 0; i < tamanhoDoVetor; i++) {
        cin >> vetor[i];
    }

    int resultado = produto(vetor, tamanhoDoVetor-1);
    
    cout << "resultado do produto dos valores do vetor: " << resultado << endl;

    imprime(vetor, tamanhoDoVetor);

    delete [] vetor;

    return 0;
}
