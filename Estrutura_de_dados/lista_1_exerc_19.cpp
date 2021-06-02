#include <iostream>

using namespace std;

float calculaMedia(int n, float *vet){
    float sum = 0;
        
    for (int i = 0; i < n; i++) {
        sum += vet[i];
    }
    
    return (sum / n);
}

int main() {

    int n;
    cout << "Digite o a quantidade de dados: " << endl;
    cin >> n;

    float *array = new float [n];
    
    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }
    
    float media = calculaMedia(n, array);

    cout << "Media e: " << media << endl;

    delete array;

    return 0;
}
