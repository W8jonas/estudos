#include <iostream>

using namespace std;

int soma(int number) {
    int sum = 0;
    if (number != 0) {
        sum += number + soma(number - 1);
        return sum;
    }
    return sum;
}

int main() {

    int number;
    cout << "Digite o numero: " << endl;
    cin >> number;

    int sum = soma(number);

    cout << "A soma e: " << sum << endl;

    return 0;
}
