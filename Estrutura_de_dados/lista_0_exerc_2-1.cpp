/*
 
  Autor: Jonas Henrique
  Data: 21/05/2021
  
  Enunciado do exercício:
  
  A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando 
  dados sobre o salário e número de filhos. A prefeitura deseja saber:

    i. média do salário da população;
    ii. média do número de filhos;
    iii. maior salário;
    iv. percentual de pessoas com salário até R$100,00;

  Desenvolver um programa que calcule e imprima as informações acima. 
  O final da leitura de dados se dará com a entrada de um salário negativo.

 */


#include <iostream>

using namespace std;

int main()
{

    float allSalary = 0;
    float bestSalary = 0;

    int allChildren = 0;
    int counterSalary = 0;
    int counterPeople = 0;
    
    cout << "\n";
    while (1) {
        float salary = 0;
        int children = 0;
        
        cout << "\n";
        cout << "Digite o seu salario: ";
        cin >> salary;

        if(salary < 0) {
            break;
        }
        counterPeople ++;

        cout << "Digite quantos filhos voce tem: ";
        cin >> children;
        
        if (salary >= 100) {
            counterSalary++;
        }
        
        if (salary > bestSalary) {
            bestSalary = salary;
        }

        allSalary += salary;
        allChildren += children;
    }

    cout << "\n";
    cout << "Media de salario da populacao: " << allSalary / counterPeople << endl;
    cout << "Media de numero de filhos: " << allChildren / counterPeople << endl;
    cout << "Maior salario: " << bestSalary << endl;
    cout << "Percentual de pessoas com salario maior que R$100,00: " << (float(counterSalary)/float(counterPeople))*100 << "%" << endl;
    cout << "\n\n";

    return 0;
}
