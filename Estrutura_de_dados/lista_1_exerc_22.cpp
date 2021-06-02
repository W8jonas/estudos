#include <iostream>

using namespace std;

float* calculaSoma(int n, float vetA[], float vetB[]) {
    float *result = new float [n];

    for (int i = 0; i < n; i++) {
        *(result + i) = *(vetA + i) + *(vetB + i);
    }

    return result;
}

int main() {

    int n;
    cout << "Digite o a quantidade de dados: " << endl;
    cin >> n;

    float *vetA = new float [n];
    float *vetB = new float [n];
    
    for (int i = 0; i < n; i++) {
        cin >> vetA[i];
    }
    
    for (int i = 0; i < n; i++) {
        cin >> vetB[i];
    }
    
    float *result = calculaSoma(n, vetA, vetB);

    for (int i = 0; i < n; i++) {
        cout << result[i] << ", ";
    }
    
    delete [] vetA;
    delete [] vetB;
    delete [] result;

    return 0;
}
