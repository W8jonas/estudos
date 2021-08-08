#include <iostream>
#include "ListaDupla.h"

using namespace std;

ListaDupla::ListaDupla()
{
    primeiro = NULL;
    ultimo = NULL;
    n = 0;
}

ListaDupla::~ListaDupla()
{
    NoDuplo *p = primeiro; //NoDuplo *p = ultimo;
    while(p != NULL)
    {
        NoDuplo *t = p->getProx(); //NoDuplo *t = p->getAnt();
        delete p;
        p = t;
    }
}

bool ListaDupla::busca(int val)
{
    for(NoDuplo *p = primeiro; p != NULL; p = p->getProx())
        if(p->getInfo() == val)
            return true;
    return false;
}

bool ListaDupla::buscaReversa(int val)
{
    for(NoDuplo *p = ultimo; p != NULL; p = p->getAnt())
        if(p->getInfo() == val)
            return true;
    return false;
}

void ListaDupla::imprime()
{
    cout << "Lista: ";
    for(NoDuplo *p = primeiro; p != NULL; p = p->getProx())
        cout << p->getInfo() << " ";
    cout << endl;
}

void ListaDupla::imprimeReverso()
{
    cout << "Lista Reversa: ";
    for(NoDuplo *p = ultimo; p != NULL; p = p->getAnt())
        cout << p->getInfo() << " ";
    cout << endl;
}

void ListaDupla::insereInicio(int val)
{
    NoDuplo *p = new NoDuplo();
    p->setInfo(val);
    p->setAnt(NULL);
    p->setProx(primeiro);
    if(primeiro == NULL)
        ultimo = p;
    else
        primeiro->setAnt(p);
    primeiro = p;
    n++;
}

void ListaDupla::removeInicio()
{
    if(primeiro != NULL)
    {
        NoDuplo *p = primeiro;
        primeiro = p->getProx();
        delete p;
        if(primeiro == NULL)
            ultimo = NULL;
        else
            primeiro->setAnt(NULL);
        n--;
    }
    else
        cout << "ERRO: Lista vazia" << endl;
}

void ListaDupla::insereFinal(int val)
{
    NoDuplo *p = new NoDuplo();
    p->setInfo(val);
    p->setAnt(ultimo);
    p->setProx(NULL);
    if(primeiro == NULL) // if(ultimo == NULL)
        primeiro = p;
    else
        ultimo->setProx(p);
    ultimo = p;
    n++;
}

void ListaDupla::removeFinal()
{
    if(primeiro != NULL)
    {
        NoDuplo *p = ultimo;
        ultimo = p->getAnt();
        delete p;
        if(ultimo == NULL)
            primeiro = NULL;
        else
            ultimo->setProx(NULL);
        n--;
    }
    else
        cout << "ERRO: Lista vazia" << endl;
}
