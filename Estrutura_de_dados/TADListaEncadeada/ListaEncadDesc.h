#ifndef LISTAENCADDESC_H_INCLUDED
#define LISTAENCADDESC_H_INCLUDED
#include "No.h"

class ListaEncad
{
public:
    ListaEncad();
    ~ListaEncad();
    void insereInicio(int val);
    void insereFinal(int val);
    void removeInicio();
    void removeFinal();
    bool busca(int val);
    void imprime();
    void insereNoPosicao(int k, int val);
    bool vazia(){return primeiro == NULL;}

private:
    No* primeiro; // ponteiro para o primeiro
    No* ultimo; // ponteiro para o ultimo
    int n; // total de nos
    void insereNo(No* p, int val);
};

#endif // LISTAENCADDESC_H_INCLUDED
