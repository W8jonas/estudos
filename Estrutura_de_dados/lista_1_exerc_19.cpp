/*
 
    Autor: Jonas Henrique
    Data: 01/06/2021

    Enunciado do exercício 18:

    Faça um programa (função main) que leia um número inteiro n e que aloque 
    dinamicamente usando o operador new[] da linguagem C++ um vetor de números
    reais usando o tipo de dados float. Faça um loop para ler cada um dos 
    valores do vetor e em seguida calcule a média dos valores e armazene-a na 
    variável média. Por fim, libere a memória alocada dinamicamente usando o 
    operador delete[].

    Enunciado do exercício 19:

    Estenda o programa do exercício anterior criando agora uma função chamada 
    calculaMedia que recebe como parâmetro um número inteiro n e um ponteiro para
    float, representando o número de elementos do vetor e o endereço do seu primeiro 
    elemento, respectivamente. A função deve calcular a média dos valores do vetor 
    e retornar esse valor. A função tem o seguinte protótipo:

       float calculaMedia(int n, float *vet); 
    
 */

#include <iostream>

using namespace std;

float calculaMedia(int n, float *vet){
    float sum = 0;
        
    for (int i = 0; i < n; i++) {
        sum += vet[i];
    }
    
    return (sum / n);
}

int main() {

    int n;
    cout << "Digite o a quantidade de dados: " << endl;
    cin >> n;

    float *array = new float [n];
    
    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }
    
    float media = calculaMedia(n, array);

    cout << "Media e: " << media << endl;

    delete [] array;

    return 0;
}
