/**
 * 
 * Enunciado
 * A) Crie uma função char* converteStringParaCStr(string str, int *tamVet); 
 * que recebe como parâmetro uma string str e a converte para um vetor de 
 * caracteres no padrão C (ou seja, terminada com o caractere nulo '\0'). 
 * O vetor de caracteres deve ser alocado com tamanho 25% maior que o tamanho 
 * da string lida. Use tamVet para armazenar o tamanho do vetor.
 * 
 * B) Crie um programa (função main) que leia uma string str e utilize sua 
 * função converteStringParaCStr para convertê-la para um vetor de caracteres. 
 * Depois, imprima o vetor de caracteres obtido, bem como o tamanho total do 
 * vetor (não o tamanho da string). Certifique-se de que toda memória é 
 * apropriadamente desalocada ao final do programa.
 * 
 */ 


#include <iostream>
#include <string.h>
#include <string>

using namespace std;

char* converteStringParaCStr(string str, int *tamVet){
    int tamanhoDoVetor = str.length();
    int novoTamanhoDoVetor = tamanhoDoVetor * 1.25;
    *tamVet = novoTamanhoDoVetor;

    char *vetor = new char [novoTamanhoDoVetor];

    for (int i = 0; i <= tamanhoDoVetor; i++) {
        if(i == tamanhoDoVetor) {
            *(vetor + i) = '\0';
        } else {
            *(vetor + i) = str[i];
        }
    }

    return vetor;
}

int main() {
    string str;
    int tamVet = 0;

    cout << "Digite o texto: ";
    cin >> str;
    cout << "Texto lido: " << str;

    char* vetor = converteStringParaCStr(str, &tamVet);

    cout << "tamVet eh: " << tamVet;

    cout << "A string em formato C eh: " << endl;

    for (int i = 0; i <= tamVet; i++) {
        if (vetor[i] == '\0') {
            break;
        }
        cout << vetor[i] << ", ";
    }

    delete [] vetor;

    return 0;
}
