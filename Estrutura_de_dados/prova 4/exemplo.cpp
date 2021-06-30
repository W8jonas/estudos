#include <iostream>
#include "MatrizEspecial.cpp"

using namespace std;

int main() {
    int m = 7, n = 5;
    MatrizEspecial matriz(m, n);

    for(int i = 0; i < m; i++)
        for(int j = 0; j < n; j++)
        {
            float val = j;
            matriz.set(i, j, val);
        }

    for(int i = 0; i < m; i++)
    {
        for(int j = 0; j < n; j++)
        {
            float val = matriz.get(i, j);
            cout << val << "\t";
        }
        cout << endl;
    }

    return 0;
}
