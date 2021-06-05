#include <iostream>

using namespace std;

int  soma(int a, int b) {
    int sum = 0;
    if (a != b) {
        sum += a + soma(a + 1, b);
        return sum;
    }
    return sum;
}

int main() {

    int a, b;
    cout << "Digite o primeiro numero: " << endl;
    cin >> a;

    cout << "Digite o segundo numero: " << endl;
    cin >> b;

    int sum = soma(a, b);

    cout << "A soma e: " << sum << endl;

    return 0;
}
