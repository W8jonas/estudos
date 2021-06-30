/**
 Enunciado
 
O código de uma opção de ação da Petrobras na bolsa de valores é composto por 5 letras e 2 números:
as 4 primeiras letras correspondem à cadeia “PETR” (código para Petrobras);
a quinta letra representa o tipo de opção. Letras de A a L significam opção de compra e entre M e X opção de venda;
os dois números representam o preço de exercício da opção.
Por exemplo: “PETRW19” significa que é uma opção de venda com preço de exercício R$19,00 reais. “PETRG20” significa que é uma opção de compra com preço de exercício R$20,00 reais.

Definir e desenvolver o TAD Opcao para representar uma opção da Petrobras que deve possuir os atributos:
char *nome (cadeia com 5 caracteres para “PETR” + caracter de fim de cadeia: ‘\0’);
char letraTipo (letra representando o tipo da opção: A até X)
int preco (inteiro positivo representando o preço de exercício)

Não se pode armazenar objetos inválidos. Isso quer dizer que os atributos têm que possuir o padrão descrito acima. Além disso, o TAD Opcao deve oferecer as seguintes operações:
Construtor, que recebe uma letra e um inteiro. Verificar se os parâmetros são válidos para a Petrobras e, se sim, armazená-los nos atributos corretos. Se o padrão não for válido, criar um objeto para a opção “PETRA10”.
Destrutor;
Operação pública char* GetTipo(); que deve retornar a mensagem: “Opção de compra” ou “Opção de venda” de acordo com o tipo.
Operação pública int GetPreco(); que deve retornar preço de exercício da opção;
Operação pública void imprime(); para imprimir o tipo da opção seguido do seu código completo. Por exemplo: “opção de venda: PETRW19” ou  "opção de compra: PETRA30” (sem aspas).

 
 */ 


#include <iostream>
#include "Opcao.cpp"

using namespace std;

int main() {
    char letra;
    int precoDaAcao;

    cout << "Digite uma letra para sua ação:" << endl;
    cin >> letra;

    cout << "Digite o preço da sua ação:" << endl;
    cin >> precoDaAcao;

    Opcao opcaoNaBolsa(letra, precoDaAcao);

    opcaoNaBolsa.imprime();

    return 0;
}
