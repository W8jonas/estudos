
#include <iostream>

using namespace std;

int main() {
    int i = 5, *p;
    p = &i;
    // cout << p <<"\t"<< (*p+2) <<"\t"<< **&p <<"\t"<<(3**p)<<"\t"<<(**&p + 4);
    
    cout << "         p: " << "\t" << p << endl;          // p tem o endereço de memória
    cout << "      (*p): " << "\t" << (*p) << endl;       // *p pega o valor de onde ele aponta
    cout << "      (&p): " << "\t" << (&p) << endl;       // &p é o valor de memória de p, que no caso é o endereço de memória p
    cout << "       *&p: " << "\t" << *&p << endl;        // pega o valor de onde ele aponta, que no caso é &p (endereço de memória)
    cout << "      **&p: " << "\t" << **&p << endl;       // pega o valor de onde ele aponta, e depois pega o valor novamente
    cout << "    (3**p): " << "\t" << (3**p) << endl;     // multiplica 3 por *p 
    cout << "(**&p + 4): " << "\t" << (**&p + 4) << endl; // Pega o valor de memória de P e soma 4.
    
    return 0;
}
