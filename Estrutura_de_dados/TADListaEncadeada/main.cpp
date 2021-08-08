#include <iostream>
#include "ListaEncadDesc.h"
using namespace std;

int main()
{
    ListaEncad l;
    l.insereFinal(1);
    l.insereFinal(2);
    l.insereFinal(3);
    l.insereFinal(4);
    l.insereFinal(5);
    l.insereFinal(6);
    l.imprime();

    for(int i=1; i<=10; i++)
    {
        l.removeFinal();
        l.imprime();
    }
    return 0;
}
