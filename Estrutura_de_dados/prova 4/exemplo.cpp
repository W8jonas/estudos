/**
 Enunciado
 
A matriz onda ampliada com alternância de sinal é uma matriz com m linhas e n 
colunas em que os elementos da primeira coluna aparecem com sinal trocado na 
terceira, que aparecem com o sinal trocado na sexta, que aparecem com sinal 
trocado na décima, e assim por diante. Os demais elementos da matriz são iguais 
a zero. Note que a quantidade de colunas com elementos nulos vai aumentando em 
progressão aritmética. Assume-se aqui que esse tipo de matriz possui ao menos 3 
linhas e 1 coluna. Veja a seguir um exemplo deste tipo de matriz, A105:

                ._                           _.
                |  1     8    -2    -7     6  |
                |  0     0     0     0     0  |
                | -1    -8     2     7    -6  |
                |  0     0     0     0     0  |
                |  0     0     0     0     0  |
    A10x5 =     |  1     8    -2    -7     6  |
                |  0     0     0     0     0  |
                |  0     0     0     0     0  |
                |  0     0     0     0     0  |
                | -1    -8     2     7    -6  |


O TAD MatrizEspecial representa esse tipo de matriz. Os valores devem ser 
armazenados no TAD MatrizEspecial por meio de uma representação linear com um 
único vetor (vet) e de modo que a quantidade de elementos armazenados seja 
mínima. Para esse TAD, desenvolver:

A) Construtor (que recebe as dimensões m e n da matriz como parâmetro) e 
destrutor da classe. Não esquecer de indicar no construtor a forma de 
representação dos elementos não nulos da matriz. Imprimir a mensagem de erro 
“Dimensões inválidas” e sair do programa, caso os valores de m e n não sejam 
válidos para esse tipo de matriz.

B) 
A operação int detInd(int i, int j) para verificar se os índices i e j da matriz 
são válidos (retornar -1 caso não sejam), e determinar o índice do vetor em que 
se encontra o elemento na posição indicada por i e j. Retornar -2 se os índices  
representam uma posição de valor zero. Use outras flags se necessário.

C)
A operação pública float get(int i, int j) para retornar o valor da posição i e j 
da matriz. Imprimir a mensagem de erro “Índices inválidos” e sair do programa, 
caso os índices não representem uma posição válida para a matriz.


D)
A operação pública void set(int i, int j, float val) para atribuir o valor na posição 
i e j da matriz. Emitir a mensagem de erro: “Tentando atribuir valor nao zero em 
posição impropria”, caso o usuário tente atribuir um valor diferente de zero na posição 
que deve ser zero. Imprimir a mensagem de erro “Índices inválidos”, caso os índices não 
representem uma posição válida para a matriz. Note que aqui não há a instrução de saída 
do programa no caso de erro.

 */ 


#include <iostream>
#include "MatrizEspecial.cpp"

using namespace std;

int main() {
    int m = 7, n = 5;
    MatrizEspecial matriz(m, n);

    for(int i = 0; i < m; i++)
        for(int j = 0; j < n; j++)
        {
            float val = j;
            matriz.set(i, j, val);
        }

    for(int i = 0; i < m; i++)
    {
        for(int j = 0; j < n; j++)
        {
            float val = matriz.get(i, j);
            cout << val << "\t";
        }
        cout << endl;
    }

    return 0;
}
