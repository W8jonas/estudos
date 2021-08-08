#include <iostream>
#include "ListaDupla.h"

using namespace std;

int main()
{
    ListaDupla l;
    l.insereInicio(5);
    l.imprime();
    l.insereInicio(10);
    l.imprime();
    l.insereInicio(15);
    l.imprime();
    l.insereInicio(20);
    l.imprime();
    l.insereInicio(25);
    l.imprime();
    l.imprimeReverso();

    l.removeInicio();
    l.imprime();

    l.insereFinal(1);
    l.imprime();
    l.insereFinal(2);
    l.imprime();
    l.insereFinal(3);
    l.imprime();
    l.insereFinal(4);
    l.imprime();

    l.removeFinal();
    l.imprime();

    return 0;
}
