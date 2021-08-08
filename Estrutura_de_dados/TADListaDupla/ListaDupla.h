#ifndef LISTADUPLA_H_INCLUDED
#define LISTADUPLA_H_INCLUDED
#include "NoDuplo.h"

class ListaDupla
{
public:
    ListaDupla();
    ~ListaDupla();
    bool busca(int val);
    bool buscaReversa(int val);
    void imprime();
    void imprimeReverso();
    void insereInicio(int val);
    void removeInicio();
    void insereFinal(int val);
    void removeFinal();
private:
    NoDuplo *primeiro;
    int n;
    NoDuplo *ultimo;
};

#endif // LISTADUPLA_H_INCLUDED
