#ifndef NODUPLO_H_INCLUDED
#define NODUPLO_H_INCLUDED

class NoDuplo
{
public:
    NoDuplo()                { };
    ~NoDuplo()               { };
    void setAnt(NoDuplo *p)  { ant = p; };
    void setProx(NoDuplo *p) { prox = p; };
    void setInfo(int val)    { info = val; };
    NoDuplo* getAnt()        { return ant; };
    NoDuplo* getProx()       { return prox; };
    int getInfo()            { return info; };
private:
    NoDuplo *ant;  // ponteiro para anterior
    int info;      // informacao
    NoDuplo *prox; // ponteiro para proximo
};

#endif // NODUPLO_H_INCLUDED
