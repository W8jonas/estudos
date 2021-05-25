#include <iostream>

using namespace std;

int main() {
    int vet[] = {3, 5, 7};

    for(int i = 0; i < 3; i++) {
        cout << *(vet + i) << endl;
    }
    
    return 0;
}