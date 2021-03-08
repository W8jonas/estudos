#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>

struct Person {
    char name[10];
    uint8_t age;
    uint8_t height;
};

int main() {

    Person person;
    strcpy(person.name, "Jonas");
    person.age = 20;
    person.height = 185;

    printf("from main: %x\n", &person);
    printf("person name: %s\nperson age: %d\nperson height: %d\n\n", person.name, person.age, person.height);

    return 1;
}
