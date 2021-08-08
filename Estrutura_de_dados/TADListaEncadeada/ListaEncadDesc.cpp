#include <iostream>
#include "ListaEncadDesc.h"

using namespace std;

ListaEncad::ListaEncad() {
    primeiro = NULL;
    ultimo = NULL;
    n = 0;
}

ListaEncad::~ListaEncad() {
    No *p = primeiro;
    while(p != NULL)
    {
        No *t = p->getProx();
        delete p;
        p = t;
    }
}

void ListaEncad::insereInicio(int val) {
    //configura o novo nó
    No *p = new No();
    p->setInfo(val);
    p->setProx(primeiro);

    primeiro = p;
    n = n + 1;

    if (n == 1)
        ultimo = p;
}

void ListaEncad::removeInicio() {
    No *p;
    if (primeiro != NULL)
    {
        p = primeiro;
        primeiro = p->getProx();
        delete p;
        
        n = n - 1; // atualiza o descritor
        if (n == 0)
            ultimo = NULL;
    }
    else
        cout<<"Lista vazia";
}

void ListaEncad::insereNoPosicao(int k, int val) {
    //insere novo nó na posição k com valor val

}

void ListaEncad::insereNo(No* p, int val) {
    //p � ponteiro v�lido

    if (n > 0)
    {
        //configura o novo nó
        No *q = new No();
        q->setInfo(val);
        q->setProx(p->getProx());

        p->setProx(q);

        if (p == ultimo)
            ultimo = q;
        n++;
    }
}

void ListaEncad::insereFinal(int val) {///O(1)

    No *p = new No();
    p->setInfo(val);
    p->setProx(NULL);

    if (n == 0)  ///primeiro == NULL
    ///lista vazia
        primeiro=p;

    else///lista nóo vazia
        ultimo->setProx(p);

    ultimo = p;
    n++;
}

void ListaEncad::removeFinal() {
    if (primeiro != NULL) { // O(n), n->numero de nós da LSE
        No *p = primeiro;
        No *q = NULL;  // q aponta para o no anterior a p

        while(p->getProx() != NULL)
        {
            q = p;
            p = p->getProx();
        }

        // p aponta para o ultimo nó da LSE e para o penultimo (se existir)

        if (primeiro == ultimo) //lista tem 1 nó apenas
            primeiro = NULL;
        else // lista tem + de 1 nó
            q->setProx(NULL);

        ultimo = q;
        delete p;
        n--;
    }
    else //lista est� vazia
        cout<<"LSED vazia, nao houve remo�ao";

}

bool ListaEncad::busca(int val) {
    for(No *p = primeiro; p != NULL; p = p->getProx())
        if (p->getInfo() == val)
            return true;
    return false;
}

void ListaEncad::imprime() {
    if (n != 0) {
        cout << "Lista simplesmentente encadeada com descritor: \n";
        for(No *p = primeiro; p != NULL; p = p->getProx())
            cout << p->getInfo() << "\t";
        cout << endl;
    }
}
