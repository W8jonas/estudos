#include <iostream>
#include "Array.cpp"

using namespace std;

int main() {
    Array vetor(10);

    for (int i = 0; i < 10; i++) {
        float number;
        cin >> number;
        vetor.set(i,  number);
    }
    

    for (int i = 0; i < 10; i++) {
        cout << vetor.get(i) << ", ";
    }
    cout << endl;

    return 0;
}
