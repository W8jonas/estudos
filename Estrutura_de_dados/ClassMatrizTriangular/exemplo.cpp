#include <iostream>
#include "MatrizTriangular.cpp"

using namespace std;

int main() {
    int dimensions = 7;

    MatrizTriangular matriz(dimensions, "lower");

    for(int i = 0; i < dimensions; i++)
        for(int j = 0; j < dimensions; j++)
        {
            float val = j + dimensions*i;
            matriz.set(i, j, val);
        }

    for(int i = 0; i < dimensions; i++)
    {
        for(int j = 0; j < dimensions; j++)
        {
            float val = matriz.get(i, j);
            cout << val << "\t";
        }
        cout << endl;
    }

    return 0;
}
