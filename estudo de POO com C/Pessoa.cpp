#include "Pessoa.h"
#include <iostream>

using namespace std;

Pessoa::Pessoa() {
	cout << "Pessoa criada\n";
}

Pessoa::Pessoa(int idade, float peso, float altura) {
	this->idade = idade;
	this->peso = peso;
	this->altura = altura;

	cout << "Pessoa criada com: \n";
	cout << "idade: " << idade << "\n";
	cout << "peso: " << peso << "\n";
	cout << "altura: " << altura << "\n";
}

Pessoa::~Pessoa() {
	cout << "Pessoa destruida\n";
}
