#ifndef PESSOA_H

#define PESSOA_H

#include <string>

class Pessoa {
	private:
		int idade;

	protected:
		float peso;
	
	public:
		float altura;
		Pessoa();
		Pessoa(int idade, float peso, float altura);
		~Pessoa();

		void getIdade();
		void setIdade(int i);

};

#endif
